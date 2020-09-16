import React from 'react';

import { BaseResult } from '@/hooks/BaseResult';

import DefaultHeader from '@/widgets/DefaultHeader';

import { DefaultProps } from '@/models/DefaultProps';
import * as S from './styles';
import { CategoryType } from './CategoryType';

type Props = {
  route: {
    params: {
      item: BaseResult;
    }
  }
}

type LocalProps = Props & DefaultProps

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
            testID="character-image"
            source={{
              uri: `${item.thumbnail?.path}.${item.thumbnail?.extension}`,
            }}
          />
        </S.Header>
      </S.HeaderArea>

      <S.TextArea>
        <S.CharacterName>
          {item?.name}
        </S.CharacterName>

        <S.CharacterDescription>
          {item.description}
        </S.CharacterDescription>
      </S.TextArea>

      <S.CategoriesArea>
        <S.CategoryCard
          testID="comics-buttom"
          onPress={() => navigateToCategory(CategoryType.COMICS)}
        >
          <S.CategoryCardText>
            Quadrinhos
          </S.CategoryCardText>
        </S.CategoryCard>
        <S.CategoryCard
          testID="series-buttom"
          onPress={() => navigateToCategory(CategoryType.SERIES)}
        >
          <S.CategoryCardText>
            Séries
          </S.CategoryCardText>
        </S.CategoryCard>
        <S.CategoryCard
          testID="events-buttom"
          onPress={() => navigateToCategory(CategoryType.EVENTS)}
        >
          <S.CategoryCardText>
            Eventos
          </S.CategoryCardText>
        </S.CategoryCard>
      </S.CategoriesArea>

    </S.Container>
  );
};

export default CharacterDetails;
