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
});
