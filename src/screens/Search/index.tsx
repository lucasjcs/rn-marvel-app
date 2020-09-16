import React from 'react';
import {
  FlatList, View, ActivityIndicator,
} from 'react-native';

import DefaultHeader from '@/widgets/DefaultHeader';
import { useMarvelAPI } from '@/hooks/useMarvelAPI';
import CharacterItem from '@/widgets/CharacterItem';
import EmptyList from '@/widgets/EmptyList';
import { DefaultProps } from '@/models/DefaultProps';
import * as S from '../Main/styles';

type Props = {
  route: {
    params: {
      search: string;
    }
  }
}

type LocalProps = Props & DefaultProps

const Search: React.FC<LocalProps> = ({ navigation, route }) => {
  const {
    result, loading, fetchMore,
  } = useMarvelAPI({
    filterParams: {
      nameStartsWith: route.params.search,
    },
  });

  function renderFooter() {
    if (!loading) return null;

    return (
      <View
        testID="loading-indicator"
        style={{ marginBottom: 100 }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <S.Container>
      <DefaultHeader navigation={navigation} />

      <S.CharactersTitleText>
        Resultado da pesquisa
      </S.CharactersTitleText>

      {!result.length && !loading && (
        <EmptyList />
      )}

      <S.CharactersAreaContent>
        <FlatList
          testID="search-list"
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

export default Search;
