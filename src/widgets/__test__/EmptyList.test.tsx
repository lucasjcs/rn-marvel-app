import React from 'react';
import { render } from '@testing-library/react-native';
import EmptyList from '../EmptyList';

describe('SearchBar', () => {
  it('should render correctly', () => {
    const { getByText } = render(<EmptyList />);
    expect(getByText('Não há nada por aqui. Sua lista está vazia!')).toBeTruthy();
  });
});
