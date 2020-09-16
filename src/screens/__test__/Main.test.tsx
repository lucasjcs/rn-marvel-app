import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { useMarvelAPI } from '@/hooks/useMarvelAPI';
import { characterList } from '@/../__mocks__/mocks/characterList';
import { Dimensions } from 'react-native';
import useFavorites from '@/hooks/useFavorites';
import Main from '../Main';

jest.mock('@/hooks/useMarvelAPI');
jest.mock('@/hooks/useFavorites');
const fetchMore = jest.fn();

// @ts-ignore
useFavorites.mockImplementation(() => ({
  checkFavorite: jest.fn().mockReturnValue(true),
}));
// @ts-ignore
useMarvelAPI.mockImplementation(() => ({
  result: characterList,
  loading: false,
  fetchMore,
}));

const { navigation } = {
  navigation: {
    goBack: jest.fn(),
    navigate: jest.fn(),
  },
};
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const eventData = {
  nativeEvent: {
    contentOffset: {
      x: 0,
      y: windowHeight,
    },
    contentSize: {
      height: windowHeight,
      width: windowWidth,
    },
    layoutMeasurement: {
      height: windowHeight,
      width: windowWidth,
    },
  },
};
describe('Main', () => {
  it('should render FlatList correctly', async () => {
    const { findAllByTestId, getByTestId, getByText } = render(
      <Main navigation={navigation} />,
    );
    fireEvent.scroll(getByTestId('main-list'), eventData);

    expect(getByText('Personagens')).toBeTruthy();
    expect(fetchMore).toHaveBeenCalled();
    expect((await findAllByTestId('character-item-list')).length).toBe(characterList.length);
  });

  it('should display screen title', async () => {
    const { getByText } = render(
      <Main navigation={navigation} />,
    );
    expect(getByText('Personagens')).toBeTruthy();
  });
});
