import React from 'react';
import {
  FlatList, View, ActivityIndicator,
} from 'react-native';

import { NavigationDefaultProps } from '@/presentation/navigation/NavigationDefaultProps';
import CategoryDetailsItem from '@/presentation/widgets/CategoryDetailsItem';
import DefaultHeader from '@/presentation/widgets/DefaultHeader';

import { useMarvelAPI } from '@/hooks/useMarvelAPI';
import EmptyList from '@/presentation/widgets/EmptyList';
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
  const { categoryType, characterId } = route.params;

  const {
    result, loading, fetchMore,
  } = useMarvelAPI({
    routeParams: {
      characterId,
      path: categoryType.path,
    },
  });

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

      {!result.length && !loading && (
        <EmptyList />
      )}

      <S.CharactersAreaContent>
        <FlatList
          data={result}
          renderItem={({ item }) => <CategoryDetailsItem item={item} />}
          keyExtractor={(item) => String(item.id)}
          numColumns={2}
          ListFooterComponent={renderFooter}
          refreshing={loading}
          onEndReachedThreshold={0.9}
          onEndReached={fetchMore}
        />

      </S.CharactersAreaContent>

    </S.Container>
  );
};

export default CharacterCategory;
