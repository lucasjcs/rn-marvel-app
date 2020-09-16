import styled from 'styled-components/native';
import { colors } from '@/assets';

export const Container = styled.View`
  flex: 1;
  background: ${colors.black};
  padding-top: 10px;
`;

export const CenteredContainer = styled(Container)`
  justify-content: center;
  align-items: center;
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
  padding: 20px;

`;
