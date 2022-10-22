/* eslint-disable space-before-function-paren */
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, Form, Logo, Subtitle, Title, TitleDiv } from "./styles";
import Makeyourgologo from "../../../assets/makeyourgo.svg";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";

import { api } from "../../../services/api";
import * as Yup from "yup";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../routes/AppStack";
import { Alert, StatusBar } from "react-native";

export function ForgotPasswordFirstStep() {
  const [email, setEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const navigation = useNavigation();

  async function handleNextStep() {
    setIsDisabled(true);

    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("E-mail inválido")
          .required("E-mail é obrigatório"),
      });

      const data = { email };
      await schema.validate(data);

      await api.post("/users/forgot_password", data).then((response) => {
        if (response.status === 201) {
          setIsDisabled(false);
          navigation.navigate("ForgotPasswordSecondStep", { data });
        }
      });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        setIsDisabled(false);
        return Alert.alert("Opa", error.message);
      } else {
        setIsDisabled(false);
        return Alert.alert(
          "Opa, parece que o email infomado não foi encontrado !"
        );
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
        <Title>Recupere sua senha</Title>

        <Subtitle>Insira seu email para procurar {`\n`}a sua conta.</Subtitle>
      </TitleDiv>
      <Form>
        <Input title="Email" onChangeText={setEmail} value={email} />

        <Button
          title="Pesquisar"
          onPress={handleNextStep}
          disabled={isDisabled}
        />
      </Form>
    </Container>
  );
}
