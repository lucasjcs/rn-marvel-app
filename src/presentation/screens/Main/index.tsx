import React, { useEffect, useState } from 'react';
import {
  FlatList, ActivityIndicator, View,
} from 'react-native';

import SearchBar from '@/presentation/widgets/SearchBar';

import CharacterItem from '@/presentation/widgets/CharacterItem';
import { DefaultProps } from '@/presentation/models/DefaultProps';
import useFavorites from '@/hooks/useFavorites';
import { useMarvelAPI } from '@/hooks/useMarvelAPI';
import * as S from './styles';

const Main: React.FC<DefaultProps> = ({ navigation }) => {
  const [page, setPage] = useState(1);
  const {
    result, loading, fetchData, fetchMore,
  } = useMarvelAPI();

  const { sendStorageToRedux } = useFavorites();

  useEffect(() => {
    sendStorageToRedux();
    fetchData({
      limit: 30,
      offset: 1,
    });
  }, []);

  function fetchMoreCharacters() {
    setPage(page + 1);
    fetchMore(page);
  }

  function renderFooter() {
    if (!loading) return null;

    return (
      <View style={{ marginBottom: 100 }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <S.Container>
      <SearchBar />

      <S.CharactersTitleText>
        Personagens
      </S.CharactersTitleText>

      <S.CharactersAreaContent>
        <FlatList
          data={result}
          renderItem={({ item }) => <CharacterItem navigation={navigation} item={item} />}
          keyExtractor={(item) => String(item.id)}
          numColumns={2}
          refreshing={loading}
          onEndReachedThreshold={0.5}
          onEndReached={fetchMoreCharacters}
          ListFooterComponent={renderFooter}
        />
      </S.CharactersAreaContent>
    </S.Container>
  );
};
export default Main;
