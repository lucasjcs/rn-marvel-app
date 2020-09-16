import MockAdapter from 'axios-mock-adapter';
import api from '@/services/api';

import { renderHook, act } from '@testing-library/react-hooks';

import { characterList } from '@/../__mocks__/mocks/characterList';
import { useRest } from '@/hooks/useRest';
import { BaseResponse } from '@/models/BaseResponse';

const apiMock = new MockAdapter(api);

describe('useRest', () => {
  it('should get from api success', async () => {
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
    expect(result.current[0].loading).toBeFalsy();
    expect(result.current[0].error).toBeUndefined();
  });

  it('should get from api failure', async () => {
    apiMock.onGet('/character').reply(500);

    const { result } = renderHook(() => useRest<BaseResponse>('/character'));

    await act(() => result.current[1]({
      limit: 1,
      offset: 1,
    }));

    expect(result.current[0].error).not.toBeUndefined();
    expect(result.current[0].loading).toBeFalsy();
  });
});
