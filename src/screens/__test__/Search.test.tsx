import React from 'react';
import { render } from '@testing-library/react-native';

import { useMarvelAPI } from '@/hooks/useMarvelAPI';
import DefaultHeader from '@/widgets/DefaultHeader';
import useFavorites from '@/hooks/useFavorites';
import { characterList } from '@/../__mocks__/mocks/characterList';
import Search from '../Search';

jest.mock('@/hooks/useMarvelAPI');
jest.mock('@/hooks/useFavorites');
jest.mock('@/widgets/DefaultHeader');
// @ts-ignore
DefaultHeader.mockImplementation(() => null);

// @ts-ignore
useFavorites.mockImplementation(() => ({
  checkFavorite: jest.fn().mockReturnValue(true),
}));

const { navigation } = {
  navigation: {
    goBack: jest.fn(),
    navigate: jest.fn(),
  },
};
const route = {
  params: {
    search: 'Wrong Term',
  },
};

describe('Search', () => {
  it('should render a empty list', async () => {
    // @ts-ignore
    useMarvelAPI.mockImplementation(() => ({
      result: characterList,
      loading: false,
      fetchMore: jest.fn(),
    }));
    const { findAllByTestId } = render(
      <Search route={route} navigation={navigation} />,
    );

    expect((await findAllByTestId('character-item-list')).length).toBe(characterList.length);
  });

  it('should display screen title', async () => {
    // @ts-ignore
    useMarvelAPI.mockImplementation(() => ({
      result: [],
      loading: false,
      fetchMore: jest.fn(),
    }));
    const { getByText } = render(
      <Search route={route} navigation={navigation} />,
    );
    expect(getByText('Resultado da pesquisa')).toBeTruthy();
  });

  it('should display activity indicator', async () => {
    // @ts-ignore
    useMarvelAPI.mockImplementation(() => ({
      result: [],
      loading: true,
      fetchMore: jest.fn(),
    }));
    const { getByTestId } = render(
      <Search route={route} navigation={navigation} />,
    );
    expect(getByTestId('loading-indicator')).not.toBeUndefined();
  });
});
