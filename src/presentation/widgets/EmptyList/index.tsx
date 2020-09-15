import React from 'react';

import { Container, ImageIcon, InfoText } from './styles';

const EmptyList: React.FC = () => (
  <Container>
    <ImageIcon source={require('@/presentation/assets/images/superhero3.png')} />
    <InfoText>
      Não há nada por aqui. Sua lista está vazia!
    </InfoText>
  </Container>
);

export default EmptyList;
