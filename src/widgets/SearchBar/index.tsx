import React, { useState } from 'react';

import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { TouchableOpacity } from 'react-native';

import { colors } from '@/assets';
import { DefaultProps } from '@/models/DefaultProps';
import * as S from './styles';

const SearchBar: React.FC<DefaultProps> = ({ navigation }) => {
  const [inputText, setInputText] = useState('');

  return (
    <S.Container>
      <S.InputGroup>
        <S.SearchBarInput
          placeholder="Buscar por heroi"
          autoCorrect={false}
          value={inputText}
          onChangeText={setInputText}
        />
        <S.IconContent>
          {inputText === '' ? (
            <Feather name="search" size={24} color={colors.white} />
          ) : (
            <TouchableOpacity
              testID="search-buttom"
              onPress={() => {
                navigation.navigate('Search', {
                  search: inputText,
                });
              }}
            >
              <Icon name="send" size={25} color={colors.white} />
            </TouchableOpacity>
          )}
        </S.IconContent>
      </S.InputGroup>
    </S.Container>
  );
};
export default SearchBar;
