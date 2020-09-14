import React, { useEffect, useState } from 'react';
import {
  FlatList, View, ActivityIndicator,
} from 'react-native';

import { NavigationDefaultProps } from '@/presentation/navigation/NavigationDefaultProps';
import CategoryDetailsItem from '@/presentation/widgets/CategoryDetailsItem';
import DefaultHeader from '@/presentation/widgets/DefaultHeader';

import { useMarvelAPI } from '@/hooks/useMarvelAPI';
import { CategoryRouteParams } from '../CharacterDetails/CategoryType';

import * as S from './styles';

type Props = {
  route: {
    params: {
      categoryType: CategoryRouteParams,
      characterId: string,
    }
  }
}

type LocalProps = Props & NavigationDefaultProps

const CharacterCategory: React.FC<LocalProps> = ({ route, navigation }) => {
  const [page, setPage] = useState(1);
  const { categoryType, characterId } = route.params;

  const {
    result, loading, fetchData, fetchMore,
  } = useMarvelAPI({
    characterId,
    path: categoryType.path,
  });

  useEffect(() => {
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
    if (!loading) {
      return null;
    }

    return (
      <View style={{ marginBottom: 50 }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <S.Container>
      <DefaultHeader navigation={navigation} />
      <S.HeaderArea>
        <S.HeaderTitle>
          {categoryType.title}
        </S.HeaderTitle>
      </S.HeaderArea>

      <S.CharactersAreaContent>
        <FlatList
          data={result}
          renderItem={({ item }) => <CategoryDetailsItem item={item} />}
          keyExtractor={(item) => String(item.id)}
          numColumns={2}
          ListFooterComponent={renderFooter}
          refreshing={loading}
          onEndReachedThreshold={0.9}
          onEndReached={fetchMoreCharacters}
        />

      </S.CharactersAreaContent>

    </S.Container>
  );
};

export default CharacterCategory;
