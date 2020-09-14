import { BaseResponse } from '@/helpers/models/BaseResponse';
import { useRest } from '@/helpers/hooks/useRest';
import { useState, useEffect } from 'react';
import { BaseResult } from './BaseResult';

interface Params {
  characterId: string,
  path: string
}

export const useMarvelAPI = (params?: Params) => {
  const [result, setResult] = useState<BaseResult[]>([]);

  let path = 'characters';
  if (params) {
    path += `/${params.characterId}/${params.path}`;
  }

  const [{ data, loading }, fetchData] = useRest<BaseResponse>(path);

  useEffect(() => {
    setResult((prevState) => (data?.data.results
      ? [...prevState, ...data?.data.results]
      : []
    ));
  }, [data]);

  function hasMore() {
    if (data?.data) {
      const { total, count, offset } = data?.data;
      return (total > count && offset < total);
    }

    return false;
  }

  function fetchMore(page: number) {
    if (hasMore()) {
      fetchData({
        limit: 30,
        offset: page * 30,
      });
    }
  }

  return {
    result, loading, fetchData, fetchMore,
  };
};
