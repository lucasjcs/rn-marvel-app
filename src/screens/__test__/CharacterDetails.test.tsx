import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CharacterDetails from '@/screens/CharacterDetails';
import useFavorites from '@/hooks/useFavorites';
import { CategoryType } from '@/screens/CharacterDetails/CategoryType';

jest.mock('react-redux');
jest.mock('@/hooks/useFavorites');

const { route } = {
  route: {
    params: {
      item: {
        id: 1,
        name: 'A-Bomb (HAS)',
        description: 'Some description',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
          extension: 'jpg',
        },
      },
    },
  },
};

const { navigation } = {
  navigation: {
    goBack: jest.fn(),
    navigate: jest.fn(),
  },
};

describe('CharacterDetails', () => {
  beforeEach(() => {
    // @ts-ignore
    useFavorites.mockImplementation(() => ({
      checkFavorite: jest.fn().mockReturnValue(false),
      setItemFavorite: jest.fn(),
    }));
  });

  it('should contain character image', () => {
    const { getByTestId } = render(
      <CharacterDetails route={route} navigation={navigation} />,
    );
    const { item } = route.params;

    expect(
      getByTestId('character-image').props.source.uri,
    )
      .toEqual(`${item.thumbnail.path}.${item.thumbnail.extension}`);
  });

  it('should contain character text info', () => {
    const { getByText } = render(
      <CharacterDetails route={route} navigation={navigation} />,
    );

    expect(getByText('A-Bomb (HAS)')).toBeTruthy();
    expect(getByText('Some description')).toBeTruthy();
  });

  it('should contain character text info', () => {
    const { getByText } = render(
      <CharacterDetails route={route} navigation={navigation} />,
    );

    expect(getByText('A-Bomb (HAS)')).toBeTruthy();
    expect(getByText('Some description')).toBeTruthy();
  });

  it('should contain category buttoms', () => {
    const { getByText } = render(
      <CharacterDetails route={route} navigation={navigation} />,
    );

    expect(getByText('Quadrinhos')).toBeTruthy();
    expect(getByText('Séries')).toBeTruthy();
    expect(getByText('Eventos')).toBeTruthy();
  });

  it('should call comics list', () => {
    const { getByTestId } = render(
      <CharacterDetails route={route} navigation={navigation} />,
    );

    fireEvent.press(getByTestId('comics-buttom'));

    expect(navigation.navigate).toHaveBeenCalledWith('CharacterCategory', {
      categoryType: CategoryType.COMICS,
      characterId: 1,
    });
  });

  it('should call series list', () => {
    const { getByTestId } = render(
      <CharacterDetails route={route} navigation={navigation} />,
    );

    fireEvent.press(getByTestId('series-buttom'));

    expect(navigation.navigate).toHaveBeenCalledWith('CharacterCategory', {
      categoryType: CategoryType.SERIES,
      characterId: 1,
    });
  });

  it('should call event list', () => {
    const { getByTestId } = render(
      <CharacterDetails route={route} navigation={navigation} />,
    );

    fireEvent.press(getByTestId('events-buttom'));

    expect(navigation.navigate).toHaveBeenCalledWith('CharacterCategory', {
      categoryType: CategoryType.EVENTS,
      characterId: 1,
    });
  });
});
