import React from 'react';

import { TouchableOpacity } from 'react-native';
import { DefaultProps } from '@/presentation/models/DefaultProps';

import { BaseResult } from '@/hooks/BaseResult';
import useFavorites from '@/hooks/useFavorites';
import * as S from './styles';

type Props = {
  item: BaseResult
}

type LocalProps = DefaultProps & Props

const CharacterItem: React.FC<LocalProps> = ({ navigation, item }) => {
  const { checkFavorite } = useFavorites();

  const isFavorite = checkFavorite(item.id);

  return (
    <S.Container>
      <TouchableOpacity onPress={() => navigation.navigate('CharacterDetails', { item })}>
        <S.CharacterCard isFavorite={isFavorite}>
          <S.CharacterImage
            testID="character-image"
            source={{
              uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
            }}
          />
          <S.CharacterName>
            {item.name?.substring(0, 27)}
            {item.name && (item.name?.length > 27 ? '...' : '')}
          </S.CharacterName>
        </S.CharacterCard>
      </TouchableOpacity>
    </S.Container>
  );
};
export default CharacterItem;
