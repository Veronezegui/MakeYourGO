/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { Container, Form, Buttons } from "./styles";
import Makeyourgologo from "../../assets/makeyourgo.svg";

import { Button } from "../../components/Button";
import { Link } from "../../components/Link";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/AppStack";
import { useAuth } from "../../contexts/AuthContext";
import { Alert, StatusBar } from "react-native";
import { InputForm } from "../../components/Input/InputForm";
import { InputFormPassword } from "../../components/InputPassword/InputFormPassword";

interface FormData {
  email: string;
  senha: string;
}

type RegisterPageProp = NativeStackNavigationProp<
  RootStackParamList,
  "RegisterPage",
  "ForgotPasswordFirstStep"
>;

const schema = Yup.object().shape({
  email: Yup.string().required(),
  senha: Yup.string().required(),
});

export function SignIn() {
  const { signIn } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigation = useNavigation<RegisterPageProp>();

  async function handleRegister(form: FormData) {
    const data = {
      email: form.email,
      senha: form.senha,
    };

    try {
      signIn(data.email, data.senha);
    } catch (error) {
      Alert.alert("Opa", "Login indisponivel no momento !");
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
          error={errors.senha ? true : false}
        />

        <Buttons>
          <Button title="Entrar" onPress={handleSubmit(handleRegister)} />
          <Button
            title="Cadastrar"
            navegator={() => navigation.navigate("RegisterPage")}
          />
        </Buttons>
      </Form>

      <Link
        title="Esqueci minha senha"
        navegator={() => navigation.navigate("ForgotPasswordFirstStep")}
      />
    </Container>
  );
}
