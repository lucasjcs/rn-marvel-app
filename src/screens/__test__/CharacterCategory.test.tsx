import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { CategoryType } from '@/screens/CharacterDetails/CategoryType';
import { useMarvelAPI } from '@/hooks/useMarvelAPI';
import { categoryList } from '@/../__mocks__/mocks/categoryList';
import { characterList } from '@/../__mocks__/mocks/characterList';
import DefaultHeader from '@/widgets/DefaultHeader';
import { Dimensions } from 'react-native';
import CharacterCategory from '../CharacterCategory';

jest.mock('@/hooks/useMarvelAPI');
jest.mock('@/widgets/DefaultHeader');

// @ts-ignore
DefaultHeader.mockImplementation(() => null);

const fetchMore = jest.fn();

const { route } = {
  route: {
    params: {
      categoryType: CategoryType.COMICS,
      characterId: characterList[0].id,
    },
  },
};

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
describe('CharacterCategory', () => {
  it('should render FlatList correctly', async () => {
    // @ts-ignore
    useMarvelAPI.mockImplementation(() => ({
      result: categoryList,
      loading: false,
      fetchMore,
    }));

    const { categoryType } = route.params;

    const { findAllByTestId, getByTestId, getByText } = render(
      <CharacterCategory route={route} navigation={navigation} />,
    );
    fireEvent.scroll(getByTestId('category-list'), eventData);

    expect(getByText(categoryType.title)).toBeTruthy();
    expect(fetchMore).toHaveBeenCalled();
    expect((await findAllByTestId('category-item')).length).toBe(categoryList.length);
  });

  it('should display activity indicatory', async () => {
    // @ts-ignore
    useMarvelAPI.mockImplementation(() => ({
      result: [],
      loading: true,
      fetchMore,
    }));

    const { getByTestId } = render(
      <CharacterCategory route={route} navigation={navigation} />,
    );

    expect(getByTestId('loading-indicator')).not.toBeUndefined();
  });
});
