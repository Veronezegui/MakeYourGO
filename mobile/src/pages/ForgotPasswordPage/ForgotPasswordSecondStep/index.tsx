/* eslint-disable space-before-function-paren */
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Container, Form, Logo, Subtitle, Title, TitleDiv } from "./styles";
import Makeyourgologo from "../../../assets/makeyourgo.svg";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";

import { api } from "../../../services/api";
import * as Yup from "yup";

import { Alert, StatusBar } from "react-native";

interface Params {
  data: { email: string };
}

export function ForgotPasswordSecondStep() {
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const navigation = useNavigation();

  const route = useRoute();
  const { data } = route.params as Params;

  async function handleNextStep() {
    setIsDisabled(true);

    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("E-mail inválido")
          .required("E-mail é obrigatório"),
        password: Yup.string().required("Senha é obrigatório"),
        passwordConfirm: Yup.string().required(
          "Confirmação de Senha é obrigatório"
        ),
      });

      const { email } = data;

      const tokenNumber = Number(token);

      const newData = {
        email,
        tokenNumber,
        password,
        passwordConfirm,
      };

      await schema.validate(newData);

      if (password !== passwordConfirm) {
        setIsDisabled(false);
        return Alert.alert("Opa, as senhas nao conferem !");
      }

      await api
        .post("/users/reset_password", {
          email,
          token: tokenNumber,
          senha: password,
        })
        .then(() => {
          setIsDisabled(false);
          navigation.navigate("Confirmation", {
            nextScreenRoute: "SignInPage",
            title: "Resenha Alterada !",
            message: `Agora é só fazer login\ne aproveitar`,
          });
        });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        setIsDisabled(false);
        return Alert.alert("Opa", error.message);
      } else {
        setIsDisabled(false);
        return Alert.alert("Opa, o token informado é invalido ou expirado !");
      }
    }
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Logo>
        <Makeyourgologo />
      </Logo>

      <TitleDiv>
        <Title>Token enviado</Title>

        <Subtitle>
          Foi enviado um token de validação {`\n`}para seu email.
        </Subtitle>
      </TitleDiv>
      <Form>
        <Input title="Token" onChangeText={setToken} value={token} />
        <Input title="Nova senha" onChangeText={setPassword} value={password} />
        <Input
          title="Confirme a senha"
          onChangeText={setPasswordConfirm}
          value={passwordConfirm}
        />

        <Button
          title="Pesquisar"
          onPress={handleNextStep}
          disabled={isDisabled}
        />
      </Form>
    </Container>
  );
}
