import React from 'react';
import {
  FlatList, View, ActivityIndicator,
} from 'react-native';

import DefaultHeader from '@/presentation/widgets/DefaultHeader';
import { useMarvelAPI } from '@/hooks/useMarvelAPI';
import { NavigationDefaultProps } from '@/presentation/navigation/NavigationDefaultProps';
import CharacterItem from '@/presentation/widgets/CharacterItem';
import * as S from '../styles';

type Props = {
  route: {
    params: {
      search: string;
    }
  }
}

type LocalProps = Props & NavigationDefaultProps

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
      <View style={{ marginBottom: 100 }}>
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

      <S.CharactersAreaContent>
        <FlatList
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
