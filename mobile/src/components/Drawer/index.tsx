import * as React from 'react';
import { useAuth } from '../../contexts/AuthContext';

import { FontAwesome } from '@expo/vector-icons';

import {
  ButtonExitView,
  ButtonNavigation,
  ButtonView,
  Container,
  Content,
  DeslogButton,
  Header,
  LineSpacing,
  Subtitle,
  Title,
  TitleButton,
  TitleExitButton
} from './styles';

function CustomDrawerContent() {
  const { authData, signOut } = useAuth();

  return (
    <Container>
      <Content>
        <Header>
          <Title>{authData?.name}</Title>
          <Subtitle>{authData?.email}</Subtitle>
        </Header>
        <LineSpacing />

        <ButtonView>
          <ButtonNavigation>
            <FontAwesome name="user" size={24} color="black" />
            <TitleButton>Perfil</TitleButton>
          </ButtonNavigation>
        </ButtonView>
      </Content>

      <ButtonExitView>
        <DeslogButton onPress={signOut}>
          <TitleExitButton>Sair</TitleExitButton>
        </DeslogButton>
      </ButtonExitView>
    </Container>
  );
}

export default CustomDrawerContent;
