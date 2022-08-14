import React from 'react';

import {
  Container,
  Form,
  Buttons,
  ButtonRecoveryKey,
  TextRecovery,
} from './styles';
import Makeyourgologo from '../../assets/makeyourgo.svg';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { InputPassword } from '../../components/InputPassword';

export function HomePage({ navigation }: any) {
  return (
    <Container>
      <Makeyourgologo />
      <Form>
        <Input title="Email" />
        <InputPassword title="Senha" />

        <ButtonRecoveryKey>
          <TextRecovery>Esqueci minha senha</TextRecovery>
        </ButtonRecoveryKey>
        <Buttons>
          <Button title="Entrar" />
          <Button
            title="Cadastrar"
            navegator={() => {
              navigation.navigate('RegisterPage');
            }}
          />
        </Buttons>
      </Form>
    </Container>
  );
}
