import React, { useState, useRef } from 'react';

import { Container, Form, Photo } from './styles';
import Makeyourgologo from '../../assets/makeyourgo.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import * as Yup from 'yup';
import { Alert } from 'react-native';
import { api } from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

export function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleRegister() {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('* Nome obrigatorio'),
        email: Yup.string()
          .email('* Digite um e-mail válido')
          .required('* E-mail obrigatório'),
        password: Yup.string().required('* Senha obrigatório'),
        confirmPassword: Yup.string().required(
          '* Confirmação de senha obrigatório'
        ),
      });

      await schema.validate({ name, email, password, confirmPassword });

      if (password === confirmPassword) {
        api.post('/', {
          name,
          email,
          password,
        });
      } else {
        Alert.alert('Falha no post');
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <Makeyourgologo />
      <Form>
        <Photo name="md-person-add-outline" size={120} color="white" />
        <Input title="Nome" onChangeText={setName} value={name} />
        <Input title="Email" onChangeText={setEmail} value={email} />
        <Input title="Senha" onChangeText={setPassword} value={password} />
        <Input
          title="Confirmar Senha"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
        />
        <Button title="Cadastrar" onPress={handleRegister} />
      </Form>
    </Container>
  );
}
