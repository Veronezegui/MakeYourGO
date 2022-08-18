import React, { useState } from 'react';

import {
  Container,
  Form,
  Buttons,
  View,
  TextRecoveryKey
} from './styles';
import Makeyourgologo from '../../assets/makeyourgo.svg';

import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import * as AuthSession from 'expo-auth-session';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { GoogleButton } from '../../components/GoogleButton'

type AuthResponse ={
  type:string;
  params:{
    access_token: string;
  }
}

export function HomePage ({ navigation }: any) {
  const [isPassword, setIsPassword] = useState(true);
  async function handleSignInGoogle () {
    const CLIENT_ID = '551709677570-cqjct4uhppum8t31qabjkergdtfv1dbu.apps.googleusercontent.com';
    const REDIRECT_URI = 'https://auth.expo.io/@hudson.guim/mobile';
    const RESPONSE_TYPE = 'token';
    const SCOPE = encodeURI('profile email');
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}`;
    const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResponse;
    if (type === 'success') {
      navigation.navegate('RegisterPage', { token: params.access_token });
    }
  }
  return (
    <Container>
      <Makeyourgologo />
      <Form>
        <Input title="Email" />
        <Input title="Senha" secureTextEntry={isPassword} />
        <View>
          <TouchableOpacity onPress={() => setIsPassword(!isPassword)}>
            {isPassword === true ? (
              <FontAwesome5 name="eye-slash" size={24} color="black" />
            ) : (

              <FontAwesome5 name="eye" size={24} color="black" />
            )}
          </TouchableOpacity>
        </View>
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
      <GoogleButton title='Entrar com Google'
      onPress={handleSignInGoogle}
      />
      <TouchableOpacity>
        <TextRecoveryKey>Esqueci minha senha</TextRecoveryKey>
      </TouchableOpacity>
    </Container>
  );
}
