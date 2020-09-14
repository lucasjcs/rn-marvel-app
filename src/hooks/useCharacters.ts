import { useState, useEffect } from 'react';

import { BaseResponse } from '@/helpers/models/BaseResponse';
import { useRest } from '@/helpers/hooks/useRest';
import { BaseResult } from './BaseResult';

export const useCharacters = () => {
  const [characters, setCharacters] = useState<BaseResult[]>([]);

  const [{ data, loading }, fetchCharacters] = useRest<BaseResponse>('/characters');

  useEffect(() => {
    setCharacters(data?.data.results ? [...characters, ...data?.data.results] : []);
  }, [data]);

  function fetchMore(page: number) {
    fetchCharacters({
      limit: 30,
      offset: page * 30,
    });
  }

  return {
    characters, loading, fetchCharacters, fetchMore,
  };
};
