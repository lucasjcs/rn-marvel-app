import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const HeaderAction = styled.View`
  flex-direction: row;
  margin-top: ${getStatusBarHeight() + 5}px;
  margin-left: 10px;
  justify-content: space-between;
`;
