import styled from 'styled-components/native';
import { colors } from '@/presentation/assets';

export const Container = styled.View`
  flex: 1;
  background: ${colors.black};
`;

export const HeaderArea = styled.View`
  height: 200px;
  background: ${colors.primary};
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
`;

export const CharacterPhoto = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin-top: 25px;
`;

export const TextArea = styled.View`
  padding: 20px;
`;

export const CharacterName = styled.Text`
  margin-top: 110px;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1px;
  align-self: center;
  color: ${colors.lighter};
`;
export const CharacterDescription = styled.Text`
  margin-top: 10px;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 1.5px;
  text-align: center;
  align-self: center;
  color: ${colors.lighter};
`;

export const CategoriesArea = styled.ScrollView`
  padding: 20px;
`;

export const CategoryCard = styled.TouchableOpacity`
  width: 100%;
  height: 80px;
  background: ${colors.darker};
  border-bottom-right-radius: 15px;
  border-top-left-radius: 15px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-left-color: ${colors.primary};
  border-bottom-color: ${colors.primary};
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

`;

export const CategoryCardText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 3px;
  color: ${colors.lighter}
`;
