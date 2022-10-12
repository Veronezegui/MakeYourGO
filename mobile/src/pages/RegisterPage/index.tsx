/* eslint-disable space-before-function-paren */
import React, { useState } from "react";

import { Container, Form } from "./styles";
import Makeyourgologo from "../../assets/makeyourgo.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import * as Yup from "yup";
import { api } from "../../services/api";

import { useAuth } from "../../contexts/AuthContext";
import { Alert, StatusBar } from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputForm } from "../../components/Input/InputForm";
import { InputFormPassword } from "../../components/InputPassword/InputFormPassword";

interface FormData {
  nome: string;
  email: string;
  senha: string;
}

const schema = Yup.object().shape({
  email: Yup.string().required(),
  senha: Yup.string().required(),
  senhaConfirmation: Yup.string().oneOf([Yup.ref("senha"), null]),
});

export function RegisterPage() {
  const { signIn } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleRegister(form: FormData) {
    const data = {
      nome: form.nome,
      email: form.email,
      senha: form.senha,
    };

    try {
      await api.post("/users", data).then((response) => {
        signIn(form.nome, form.senha);
      });
    } catch (err) {
      console.log(err);
      Alert.alert("Opa", "Parece que esse email ja está sendo utilizado.");
    }
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Makeyourgologo />

      <Form>
        <InputForm
          control={control}
          name="nome"
          title="Nome"
          autoCapitalize="sentences"
          autoCorrect={false}
          error={errors.email ? true : false}
        />
        <InputForm
          control={control}
          name="email"
          title="Email"
          autoCapitalize="sentences"
          autoCorrect={false}
          error={errors.email ? true : false}
        />
        <InputFormPassword
          control={control}
          name="senha"
          title="Senha"
          autoCapitalize="sentences"
          autoCorrect={false}
          error={errors.senha || errors.senhaConfirmation ? true : false}
        />
        <InputFormPassword
          control={control}
          name="senhaConfirmation"
          title="Confirme a senha"
          autoCapitalize="sentences"
          autoCorrect={false}
          error={errors.senhaConfirmation ? true : false}
        />
        <Button title="Cadastrar" onPress={handleSubmit(handleRegister)} />
      </Form>
    </Container>
  );
}
