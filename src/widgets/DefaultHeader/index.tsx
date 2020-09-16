import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { DefaultProps } from '@/models/DefaultProps';
import { colors } from '@/assets';
import { BaseResult } from '@/hooks/BaseResult';
import useFavorites from '@/hooks/useFavorites';
import { HeaderAction } from './styles';

type Props = {
  withFavorite?: boolean
  character?: BaseResult
}

type LocalProps = Props & DefaultProps

const DefaultHeader: React.FC<LocalProps> = ({ navigation, withFavorite, character }) => {
  const [favorite, setFavorite] = useState(false);

  const { setItemFavorite, checkFavorite } = useFavorites();

  const changeStatusIcon = () => {
    if (withFavorite && character) {
      setItemFavorite(character);

      setFavorite(!favorite);
    }
  };

  useEffect(() => {
    if (withFavorite && character) {
      const isFavorite = checkFavorite(character.id);
      setFavorite(isFavorite);
    }
  }, []);

  return (
    <HeaderAction>
      <TouchableOpacity testID="back-buttom" onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={25} color={colors.white}> </Icon>
      </TouchableOpacity>

      {withFavorite && (
        <View>
          {favorite ? (
            <TouchableOpacity testID="change-status-buttom" onPress={changeStatusIcon}>
              <Icon name="favorite" size={45} color={colors.lighter}> </Icon>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={changeStatusIcon}>
              <Icon name="favorite-border" size={45} color={colors.white}> </Icon>
            </TouchableOpacity>
          )}
        </View>
      )}

    </HeaderAction>
  );
};

export default DefaultHeader;
