import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';

import SearchBar from '@/presentation/widgets/SearchBar';

import { useCharacters } from '@/hooks/useCharacters';

import CharacterItem from '@/presentation/widgets/CharacterItem';
import { DefaultProps } from '@/presentation/models/DefaultProps';
import useFavorites from '@/hooks/useFavorites';
import * as S from './styles';

const Main: React.FC<DefaultProps> = ({ navigation }) => {
  const [page, setPage] = useState(1);
  const {
    loading, data, fetchCharacters,
  } = useCharacters();

  const { sendStorageToRedux } = useFavorites();

  useEffect(() => {
    sendStorageToRedux();
    fetchCharacters({
      limit: 10,
      offset: 1,
    });
  }, []);

  function fetchMoreCharacters() {
    setPage(page + 1);
    // fetchCharacters({
    //   limit: 10,
    //   offset: page * page,
    // });
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
          data={data?.data.results}
          renderItem={({ item }) => <CharacterItem navigation={navigation} item={item} />}
          keyExtractor={() => String(Math.random())}
          numColumns={2}
          ListFooterComponent={renderFooter}
          refreshing={loading}
          onEndReachedThreshold={0.1}
          onEndReached={fetchMoreCharacters}
        />
      </S.CharactersAreaContent>
    </S.Container>
  );
};
export default Main;
