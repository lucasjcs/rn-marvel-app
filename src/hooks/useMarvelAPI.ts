import { BaseResponse } from '@/helpers/models/BaseResponse';
import { useRest } from '@/helpers/hooks/useRest';
import { useState, useEffect } from 'react';
import { BaseResult } from './BaseResult';
import useFavorites from './useFavorites';

interface Params {
  routeParams?: {
    characterId: string,
    path: string
  }
  filterParams?: {
    nameStartsWith: string,
  }
}

export const useMarvelAPI = (params?: Params) => {
  const [result, setResult] = useState<BaseResult[]>([]);
  const [page, setPage] = useState(1);

  const { sendStorageToRedux } = useFavorites();

  let path = 'characters';
  if (params?.routeParams) {
    path += `/${params.routeParams.characterId}/${params.routeParams.path}`;
  }

  const [{ data, loading }, fetchData] = useRest<BaseResponse>(path);

  useEffect(() => {
    setResult((prevState) => (data?.data.results
      ? [...prevState, ...data?.data.results]
      : []
    ));
  }, [data]);

  useEffect(() => {
    sendStorageToRedux();
    fetchData({
      limit: 30,
      offset: 1,
      ...params?.filterParams,
    });
  }, []);

  function hasMore() {
    if (data?.data) {
      const { total, count, offset } = data?.data;
      return (total > count && offset < total);
    }

    return false;
  }

  function fetchMore() {
    if (hasMore()) {
      setPage(page + 1);

      fetchData({
        limit: 30,
        offset: page * 30,
        ...params?.filterParams,
      });
    }
  }

  return {
    result, loading, fetchData, fetchMore,
  };
};
