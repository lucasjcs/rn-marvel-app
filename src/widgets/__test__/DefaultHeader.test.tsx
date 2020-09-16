import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import useFavorites from '@/hooks/useFavorites';
import DefaultHeader from '@/widgets/DefaultHeader';

jest.mock('@/hooks/useFavorites');
const setItemFavorite = jest.fn();
const checkFavorite = jest.fn().mockReturnValue(true);
// @ts-ignore
useFavorites.mockImplementation(() => ({
  setItemFavorite,
  checkFavorite,
}));

const { navigation } = {
  navigation: {
    navigate: jest.fn(),
    goBack: jest.fn(),
  },
};
const character = {
  id: 1017100,
  name: 'A-Bomb (HAS)',
  description: 'Some description',
  thumbnail: {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
    extension: 'jpg',
  },
};

describe('DefaultHeader', () => {
  it('should call goBack function on click in back buttom', () => {
    const { getByTestId } = render(
      <DefaultHeader
        navigation={navigation}
      />,
    );

    fireEvent.press(getByTestId('back-buttom'));

    expect(navigation.goBack).toHaveBeenCalled();
  });

  it('should favorite character on click in favorite buttom', () => {
    const { getByTestId } = render(
      <DefaultHeader
        navigation={navigation}
        withFavorite
        character={character}
      />,
    );

    fireEvent.press(getByTestId('change-status-buttom'));

    expect(setItemFavorite).toHaveBeenCalledWith(character);
  });
});
