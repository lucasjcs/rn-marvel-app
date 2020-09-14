import React from 'react';

import useFavorites from '@/hooks/useFavorites';
import { FlatList } from 'react-native';
import CharacterItem from '@/presentation/widgets/CharacterItem';
import { DefaultProps } from '@/presentation/models/DefaultProps';
import * as S from './styles';

const Favorites: React.FC<DefaultProps> = ({ navigation }) => {
  const { favoriteList } = useFavorites();

  return (
    <S.FromMain.Container>
      <S.CharactersTitleText>
        Favoritos
      </S.CharactersTitleText>

      {!favoriteList.length && (
        <S.EmptyList testID="empty-list">
          <S.EmptyListIcon source={require('@/presentation/assets/images/superhero.png')} />
          <S.EmptyText>
            Você ainda não possui nenhum personagem favorito.
          </S.EmptyText>
        </S.EmptyList>
      )}

      <S.FromMain.CharactersAreaContent>
        <FlatList
          data={favoriteList}
          renderItem={({ item }) => <CharacterItem navigation={navigation} item={item} />}
          keyExtractor={() => String(Math.random())}
          numColumns={2}
          onEndReachedThreshold={0.5}
        />
      </S.FromMain.CharactersAreaContent>
    </S.FromMain.Container>
  );
};

export default Favorites;
