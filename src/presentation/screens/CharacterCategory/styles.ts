import styled from 'styled-components/native';
import { colors } from '@/presentation/assets';

export const Container = styled.View`
  flex: 1;
  background: ${colors.black};
`;

export const HeaderArea = styled.View`
  padding: 20px;
`;

export const HeaderTitle = styled.Text`
  color: ${colors.lighter};
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
  margin-top: 20px;
`;

export const CharactersAreaContent = styled.View`
  flex: 1;
`;
