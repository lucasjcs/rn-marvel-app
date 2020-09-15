import { renderHook, act } from '@testing-library/react-hooks';
import useFavorites from '@/hooks/useFavorites';
import { useDispatch, useSelector } from 'react-redux';
import { characterList } from '@/../__mocks__/mocks/characterList';

jest.mock('react-redux');

const dispatch = jest.fn();
// @ts-ignore
useDispatch.mockReturnValue(dispatch);
// @ts-ignore
useSelector.mockImplementation(() => characterList);

describe('useFavorites', () => {
  it('should add favorite', () => {
    const item = {
      id: 1017100,
      name: 'A-Bomb (HAS)',
      description: 'Some description',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
        extension: 'jpg',
      },
    };

    const { result } = renderHook(() => useFavorites());
    act(() => result.current.setItemFavorite(item));

    expect(dispatch).toHaveBeenCalledWith({
      type: 'SET_FAVORITES',
      data: {
        characters: [
          ...characterList, item,
        ],
      },
    });
  });

  it('should remove from list if already exists ', () => {
    const item = {
      description: 'Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.',
      id: 1009146,
      name: 'Abomination (Emil Blonsky)',
      thumbnail: {
        extension: 'jpg',
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04',
      },
    };

    const { result } = renderHook(() => useFavorites());
    act(() => result.current.setItemFavorite(item));

    expect(dispatch).toHaveBeenCalledWith({
      type: 'SET_FAVORITES',
      data: {
        characters: characterList.filter((character) => character.id !== item.id),
      },
    });
  });

  it('should send storageToRedux', async () => {
    const { result } = renderHook(() => useFavorites());
    await act(() => result.current.sendStorageToRedux());

    expect(dispatch).toHaveBeenCalled();
  });

  it('should send storageToRedux', () => {
    const { result } = renderHook(() => useFavorites());

    let isFavorite = false;
    act(() => {
      isFavorite = result.current.checkFavorite(characterList[0].id);
    });

    expect(isFavorite).toBeTruthy();
  });
});
