import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchBar from '../SearchBar';

const { navigation } = {
  navigation: {
    goBack: jest.fn(),
    navigate: jest.fn(),
  },
};
describe('SearchBar', () => {
  it('should display correct placeholder', () => {
    const { getByPlaceholderText } = render(<SearchBar navigation={navigation} />);
    expect(getByPlaceholderText('Buscar por heroi')).toBeTruthy();
  });

  it('should send search term correctly', () => {
    const { getByPlaceholderText, getByTestId } = render(<SearchBar navigation={navigation} />);
    const text = 'Some text';
    fireEvent.changeText(getByPlaceholderText('Buscar por heroi'), 'Some text');
    fireEvent.press(getByTestId('search-buttom'));

    expect(navigation.navigate).toHaveBeenCalledWith('Search', {
      search: text,
    });
  });
});
