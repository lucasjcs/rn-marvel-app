import React from 'react';

import useFavorites from '@/hooks/useFavorites';
import { FlatList } from 'react-native';
import CharacterItem from '@/widgets/CharacterItem';
import { DefaultProps } from '@/models/DefaultProps';
import EmptyList from '@/widgets/EmptyList';
import * as S from './styles';

const Favorites: React.FC<DefaultProps> = ({ navigation }) => {
  const { favoriteList } = useFavorites();

  return (
    <S.FromMain.Container>
      <S.CharactersTitleText>
        Favoritos
      </S.CharactersTitleText>

      {!favoriteList.length && (
        <EmptyList />
      )}

      <S.FromMain.CharactersAreaContent>
        <FlatList
          testID="character-item"
          data={favoriteList}
          renderItem={({ item }) => <CharacterItem navigation={navigation} item={item} />}
          keyExtractor={(item) => String(item.id)}
          numColumns={2}
          onEndReachedThreshold={0.5}
        />
      </S.FromMain.CharactersAreaContent>
    </S.FromMain.Container>
  );
};

export default Favorites;
