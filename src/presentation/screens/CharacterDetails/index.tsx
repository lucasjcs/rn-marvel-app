import React from 'react';

import { BaseResult } from '@/hooks/BaseResult';

import DefaultHeader from '@/presentation/widgets/DefaultHeader';
import { NavigationDefaultProps } from '@/presentation/navigation/NavigationDefaultProps';

import { CategoryType } from './CategoryType';

import * as S from './styles';

type Props = {
  route: {
    params: {
      item: BaseResult;
    }
  }
}

type LocalProps = Props & NavigationDefaultProps

const CharacterDetails: React.FC<LocalProps> = ({ route, navigation }) => {
  const { item } = route.params;

  function navigateToCategory(categoryType: any) {
    navigation.navigate('CharacterCategory', {
      categoryType,
      characterId: item.id,
    });
  }

  return (
    <S.Container>
      <S.HeaderArea>
        <DefaultHeader navigation={navigation} withFavorite character={item} />
        <S.Header>
          <S.CharacterPhoto
            source={{
              uri: `${item.thumbnail?.path}.${item.thumbnail?.extension}`,
            }}
          />
        </S.Header>
      </S.HeaderArea>

      <S.TextArea>
        <S.CharacterName>
          {item.name}
        </S.CharacterName>

        <S.CharacterDescription>
          {item.description}
        </S.CharacterDescription>
      </S.TextArea>

      <S.CategoriesArea>
        <S.CategoryCard onPress={() => navigateToCategory(CategoryType.COMICS)}>
          <S.CategoryCardText>
            Quadrinhos
          </S.CategoryCardText>
        </S.CategoryCard>
        <S.CategoryCard onPress={() => navigateToCategory(CategoryType.SERIES)}>
          <S.CategoryCardText>
            Series
          </S.CategoryCardText>
        </S.CategoryCard>
        <S.CategoryCard onPress={() => navigateToCategory(CategoryType.EVENTS)}>
          <S.CategoryCardText>
            Eventos
          </S.CategoryCardText>
        </S.CategoryCard>
      </S.CategoriesArea>

    </S.Container>
  );
};

export default CharacterDetails;
