import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { colors } from '../../assets';

export interface StyledProps {
  isFavorite?: boolean;
}

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

export const CharacterCard = styled.View`
  display: flex;
  overflow: hidden;
  height: 220px;
  max-width: ${(windowWidth / 2) - 25}px;
  margin-bottom: 10px;
  background: ${colors.darker};
  border-radius: 10px;
  border-width: ${(props: StyledProps) => (props.isFavorite ? '2px' : '0px')};
  border-color: ${(props: StyledProps) => (props.isFavorite ? colors.primary : colors.darker)};

  align-items: center;
`;

export const CharacterImage = styled.Image`
  width: 100%;
  height: 150px;
  margin-bottom: 5px;
  resize-mode: stretch;
`;

export const CharacterName = styled.Text`
  color: black;
  font-size: 18px;
  font-weight: bold;
  color: ${colors.white};
  margin-bottom: 10px;
  text-align: center;
  padding: 0 5px;
`;

export const ModalArea = styled.TouchableOpacity`
  background: ${colors.black};
  border-radius: 10px;
  width: 200px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: ${(windowHeight) - 200}px;

  shadow-opacity: 0.5;
  shadow-radius: 10px;
  shadow-color: ${colors.lighter};
  shadow-offset: 0px 0px;
`;

export const FavoriteText = styled.Text`
  font-size: 18px;
  color: ${colors.lighter}
`;
