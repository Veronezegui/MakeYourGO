/* eslint-disable space-before-function-paren */
import React, { useState } from 'react';

import { Container, Form, Photo } from './styles';
import Makeyourgologo from '../../assets/makeyourgo.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import * as Yup from 'yup';
import { Alert } from 'react-native';
import { api } from '../../services/api';

import { useAuth } from '../../contexts/AuthContext';

export function RegisterPage() {
  const { signIn } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleRegister() {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('* Nome obrigatorio'),
        email: Yup.string()
          .email('* Digite um e-mail válido')
          .required('* E-mail obrigatório'),
        senha: Yup.string().required('* Senha obrigatório'),
        confirmPassword: Yup.string().required(
          '* Confirmação de senha obrigatório'
        )
      });

      await schema.validate({ name, email, senha, confirmPassword });

      if (senha === confirmPassword) {
        api.post('/users', {
          name,
          email,
          senha
        });

        signIn(email, senha);
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
        <Input title="Senha" onChangeText={setSenha} value={senha} />
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
