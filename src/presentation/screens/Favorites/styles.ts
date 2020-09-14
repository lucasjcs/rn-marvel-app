import styled from 'styled-components/native';
import { colors } from '@/presentation/assets';
import * as FromMain from '../Main/styles';

export const CharactersTitleText = styled(FromMain.CharactersTitleText)`
 margin-top: 50px;
`;

export const EmptyList = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const EmptyListIcon = styled.Image`
  width: 150px;
  height: 150px;
`;
export const EmptyText = styled.Text`
  font-size: 18px;
  letter-spacing: 1px;
  text-align: center;
  margin-top: 20px;
  color: ${colors.lighter}
`;

export { FromMain };
