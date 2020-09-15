import React from 'react';

import { render } from '@testing-library/react-native';
import Favorites from '@/presentation/screens/Favorites';
import useFavorites from '@/hooks/useFavorites';
import { DefaultProps } from '@/presentation/models/DefaultProps';
import { characterList } from '../../../../__mocks__/mocks/characterList';

jest.mock('@/hooks/useFavorites');

const { navigation }: DefaultProps = {
  navigation: {
    navigate: jest.fn(),
  },
};

describe('Favorites', () => {
  it('should show empty list', () => {
    // @ts-ignore
    useFavorites.mockImplementation(() => ({
      sendStorageToRedux: jest.fn(),
      favoriteList: [],
    }));

    const { getByText } = render(<Favorites navigation={navigation} />);

    expect(
      getByText('Não há nada por aqui. Sua lista está vazia!'),
    ).toBeTruthy();
  });

  it('should be render favorite list', () => {
    // @ts-ignore
    useFavorites.mockImplementation(() => ({
      sendStorageToRedux: jest.fn(),
      favoriteList: characterList,
      checkFavorite: jest.fn().mockReturnValue(false),
    }));

    const { getByTestId } = render(<Favorites navigation={navigation} />);

    expect(getByTestId('character-item').props.data.length).toBe(3);
  });
});
