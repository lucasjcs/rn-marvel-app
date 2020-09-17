import React from 'react';
import {
  FlatList, ActivityIndicator, View,
} from 'react-native';

import SearchBar from '@/widgets/SearchBar';

import CharacterItem from '@/widgets/CharacterItem';
import { DefaultProps } from '@/models/DefaultProps';
import { useMarvelAPI } from '@/hooks/useMarvelAPI';
import { colors } from '@/assets';
import * as S from './styles';

const Main: React.FC<DefaultProps> = ({ navigation }) => {
  const {
    result, loading, fetchMore,
  } = useMarvelAPI();

  function renderFooter() {
    if (!loading) return null;

    return (
      <View testID="loading-indicator" style={{ marginBottom: 100, height: '100%', marginTop: 20 }}>
        <ActivityIndicator size={30} color={colors.primary} />
      </View>
    );
  }

  return (
    <S.Container>
      <SearchBar navigation={navigation} />

      <S.CharactersTitleText>
        Personagens
      </S.CharactersTitleText>

      <S.CharactersAreaContent>
        <FlatList
          testID="main-list"
          data={result}
          renderItem={({ item }) => <CharacterItem navigation={navigation} item={item} />}
          keyExtractor={(item) => String(item.id)}
          numColumns={2}
          refreshing={loading}
          onEndReachedThreshold={0.5}
          onEndReached={fetchMore}
          ListFooterComponent={renderFooter}
        />
      </S.CharactersAreaContent>
    </S.Container>
  );
};
export default Main;
