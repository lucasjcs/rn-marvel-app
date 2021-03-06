import React from 'react';

import { BaseResult } from '@/hooks/BaseResult';
import * as S from '../CharacterItem/styles';

type Props = {
  item: BaseResult
}
const CategoryDetailsItem: React.FC<Props> = ({ item }) => (
  <S.Container testID="category-item">
    <S.CharacterCard>
      <S.CharacterImage
        testID="character-image"
        source={{
          uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
        }}
      />
      <S.CharacterName testID="category-title">
        {item.title?.substring(0, 22)}
        {item.title && (item.title?.length > 22 ? '...' : '')}
      </S.CharacterName>
    </S.CharacterCard>
  </S.Container>
);

export default CategoryDetailsItem;
