import React, { useState } from 'react';

import {
  Container,
  Form,
  Buttons,
  View,
  RecoveryKey,
  Title,
  TextRecoveryKey,
} from './styles';
import Makeyourgologo from '../../assets/makeyourgo.svg';

import { FontAwesome5 } from '@expo/vector-icons';

import { Text, TouchableOpacity } from 'react-native';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function HomePage({ navigation }: any) {
  const [isPassword, setIsPassword] = useState(true);
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

      <TouchableOpacity>
        <TextRecoveryKey>Esqueci minha senha</TextRecoveryKey>
      </TouchableOpacity>
    </Container>
  );
}
