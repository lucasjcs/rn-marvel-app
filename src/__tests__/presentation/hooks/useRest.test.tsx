import MockAdapter from 'axios-mock-adapter';

import { renderHook, act } from '@testing-library/react-hooks';
import api from '@/services/api';

import { useRest } from '@/helpers/hooks/useRest';

import { characterList } from '@/../__mocks__/mocks/characterList';
import { BaseResponse } from '@/helpers/models/BaseResponse';

const apiMock = new MockAdapter(api);

describe('useRest', () => {
  it('should get from api using rest hook', async () => {
    apiMock.onGet('/character').reply(200, {
      data: {
        results: characterList,
      },
    });

    const { result } = renderHook(() => useRest<BaseResponse>('/character'));

    await act(() => result.current[1]({
      limit: 1,
      offset: 1,
    }));

    expect(result.current[0].data?.data.results?.length).toBe(3);
  });
});
