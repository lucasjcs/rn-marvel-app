import React from 'react';
import { render } from '@testing-library/react-native';
import useFavorites from '@/hooks/useFavorites';
import CategoryDetailsItem from '@/widgets/CategoryDetailsItem';
import { categoryList } from '@/../__mocks__/mocks/categoryList';

jest.mock('@/hooks/useFavorites');
const setItemFavorite = jest.fn();
const checkFavorite = jest.fn().mockReturnValue(true);
// @ts-ignore
useFavorites.mockImplementation(() => ({
  setItemFavorite,
  checkFavorite,
}));

describe('ChategoryDetailsItem', () => {
  it('should render correctly', () => {
    const categoryItem = categoryList[0];
    const { getByText, getByTestId } = render(<CategoryDetailsItem item={categoryItem} />);

    expect(getByText(`${categoryItem.title.substring(0, 22)}...`)).toBeTruthy();
    expect(
      getByTestId('character-image').props.source.uri,
    )
      .toEqual(`${categoryItem.thumbnail.path}.${categoryItem.thumbnail.extension}`);
  });

  it('should render correctly without image', () => {
    const categoryItem = {
      id: 34050,
      modified: '2012-03-20T12:32:12-0400',
      description: "The secret organization hell-bent on capturing the Incredible Hulk has hired the services of one of his deadliest and oldest foes, The Abomination! Two of the Marvel Universe's most powerful adversaries go head-to-head and toe-to-toe in a gamma-powered slugfest!",
      thumbnail: {
        extension: 'jpg',
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/e0/58debf0a7c8e7',
      },
    };
    const { getByTestId } = render(<CategoryDetailsItem item={categoryItem} />);

    expect(getByTestId('category-title').props.children[0]).toBeUndefined();
  });
});
