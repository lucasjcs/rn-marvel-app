import { BaseResponse } from '@/helpers/models/BaseResponse';
import { useRest } from '@/helpers/hooks/useRest';

export const useCharactersDetails = (characterId: string, path: string) => {
  const [{ data, error, loading }, fetchDetails] = useRest<BaseResponse>(
    `/characters/${characterId}/${path}`,
  );

  return {
    data, error, loading, fetchDetails,
  };
};
