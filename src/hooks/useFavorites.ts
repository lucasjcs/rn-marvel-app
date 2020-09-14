import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch, useSelector } from 'react-redux';

import FavoritesActions from '@/store/ducks/Favorites';
import { FavoriteState } from '@/store/models/FavoriteState';
import { BaseResult } from './BaseResult';
import { StorageKeys } from './StorageKeys';

const useFavorites = () => {
  const dispatch = useDispatch();
  const favoriteList = useSelector((state: FavoriteState) => state.favorites.characters);

  const setItemFavorite = (character: BaseResult) => {
    const isFavorite = favoriteList.some((item) => item.id === character.id);

    let list: BaseResult[];

    if (isFavorite) {
      list = favoriteList.filter((item) => item.id !== character.id);
    } else {
      list = [...favoriteList, character];
    }
    AsyncStorage.setItem(StorageKeys.FAVORITES, JSON.stringify(list));

    dispatch(
      FavoritesActions.setFavorites({
        characters: list,
      }),
    );
  };

  const checkFavorite = (characterId: number) => {
    const isFavorite = favoriteList.some((item) => item.id === characterId);

    return isFavorite;
  };

  const sendStorageToRedux = async () => {
    const list = JSON.parse(
      await AsyncStorage.getItem(StorageKeys.FAVORITES) || '[]',
    ) as BaseResult[] || [];

    dispatch(
      FavoritesActions.setFavorites({
        characters: list,
      }),
    );
  };

  return {
    favoriteList,
    setItemFavorite,
    checkFavorite,
    sendStorageToRedux,
  };
};

export default useFavorites;
