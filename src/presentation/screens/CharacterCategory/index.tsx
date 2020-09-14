import React, { useEffect } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';

import { NavigationDefaultProps } from '@/presentation/navigation/NavigationDefaultProps';
import CategoryDetailsItem from '@/presentation/widgets/CategoryDetailsItem';
import DefaultHeader from '@/presentation/widgets/DefaultHeader';

import { useCharactersDetails } from '@/hooks/useCharacterDetails';
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
    data, loading, fetchDetails,
  } = useCharactersDetails(characterId, categoryType.path);

  useEffect(() => {
    fetchDetails({
      limit: 40,
      offset: 1,
    });
  }, []);

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
          data={data?.data.results}
          renderItem={({ item }) => <CategoryDetailsItem item={item} />}
          keyExtractor={() => String(Math.random())}
          numColumns={2}
          ListFooterComponent={renderFooter}
          refreshing={loading}
          onEndReachedThreshold={0.5}
        />
      </S.CharactersAreaContent>

    </S.Container>
  );
};

export default CharacterCategory;
