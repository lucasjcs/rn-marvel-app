import styled from 'styled-components/native';
import { colors } from '@/assets';

export const Container = styled.View`
  flex: 1;
  background: ${colors.black};
  padding: 20px;
`;
export const CenteredContainer = styled(Container)`
  justify-content: center;
  align-items: center;
`;

export const CharactersTitleText = styled.Text`
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 24px;
  letter-spacing: 1px;
  color: ${colors.lighter};
  font-weight: bold;
`;

export const CharactersAreaContent = styled.View`
  flex: 1;
`;
