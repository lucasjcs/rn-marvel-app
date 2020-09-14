import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { render } from '@testing-library/react-native';
import { BaseResult } from '@/hooks/BaseResult';
import CharacterItem from '@/presentation/widgets/CharacterItem';
import { DefaultProps } from '@/presentation/models/DefaultProps';
import useFavorites from '@/hooks/useFavorites';

jest.mock('@/hooks/useFavorites');

const characterItem: BaseResult = {
  id: 1,
  name: 'A-Bomb (HAS)',
  description: 'Some description',
  thumbnail: {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
    extension: 'jpg',
  },
};

const { navigation }: DefaultProps = {
  navigation: {
    navigate: jest.fn(),
  },
};

beforeEach(() => {
  // @ts-ignore
  useFavorites.mockImplementation(() => ({ checkFavorite: jest.fn().mockReturnValue(false) }));
});

describe('CharacterItem', () => {
  it('should render header image', () => {
    const { getByTestId } = render(
      <CharacterItem navigation={navigation} item={characterItem} />,
    );

    expect(
      getByTestId('character-image').props.source.uri,
    )
      .toEqual(`${characterItem.thumbnail.path}.${characterItem.thumbnail.extension}`);
  });

  it('should render character name', () => {
    const { getByText } = render(
      <CharacterItem navigation={navigation} item={characterItem} />,
    );

    expect(getByText('A-Bomb (HAS)')).toBeTruthy();
  });
});
