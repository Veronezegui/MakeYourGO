/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Form,
  Buttons

} from './styles';
import Makeyourgologo from '../../assets/makeyourgo.svg';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from '../../components/Link';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/AppStack';
import { useAuth } from '../../contexts/AuthContext';

type RegisterPageProp = NativeStackNavigationProp<RootStackParamList, 'RegisterPage'>;

export function SignIn() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigation = useNavigation<RegisterPageProp>();
  return (
    <Container>
      <Makeyourgologo />
      <Form>
        <Input title="Email" value={email} onChangeText={setEmail} />
        <Input title="Senha" value={senha} onChangeText={setSenha} secureTextEntry={true} />
        <Buttons>
          <Button title="Entrar" onPress={() => signIn(email, senha)} />
          <Button
            title="Cadastrar"
            navegator={() =>
              navigation.navigate('RegisterPage')
            }
          />
        </Buttons>
      </Form>

      <Link title='Esqueci minha senha' navegator={() => navigation.navigate('ForgotPassword')} />
    </Container>
  );
}
