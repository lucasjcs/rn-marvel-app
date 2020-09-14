import { BaseResponse } from '@/helpers/models/BaseResponse';
import { useRest } from '@/helpers/hooks/useRest';

export const useCharacters = () => {
  const [{ data, loading }, fetchCharacters] = useRest<BaseResponse>('/characters');

  return {
    data, loading, fetchCharacters,
  };
};
