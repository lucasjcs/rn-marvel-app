import styled from 'styled-components/native';
import { colors } from '@/assets';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ImageIcon = styled.Image`
  height: 80px;
  width: 80px;
  margin-bottom: 20px;
`;

export const InfoText = styled.Text`
  font-size: 18px;
  color: ${colors.lighter};
  letter-spacing: 1px;
  text-align: center;
`;
