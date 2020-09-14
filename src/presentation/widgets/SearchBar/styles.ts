import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { colors } from '@/presentation/assets';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  margin-top: ${getStatusBarHeight() + 10}px;
`;

export const SearchBarInput = styled.TextInput.attrs({
  placeholderTextColor: colors.white,
})`
  border-width: 0.5px;
  padding: 15px;
  border-radius: 10px;
  color: ${colors.lighter};
  background: ${colors.darker};
`;

export const InputGroup = styled.View``;

export const IconContent = styled.View`
  position: absolute;
  left: ${width - 80}px;
  top: 10px;
`;
