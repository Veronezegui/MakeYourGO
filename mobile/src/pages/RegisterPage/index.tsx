/* eslint-disable space-before-function-paren */
import React, { useState } from "react";

import { Container, Form } from "./styles";
import Makeyourgologo from "../../assets/makeyourgo.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { api } from "../../services/api";

import { useAuth } from "../../contexts/AuthContext";
import { Alert, StatusBar } from "react-native";

export function RegisterPage() {
  const { signIn } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleRegister() {
    try {
      if (senha === "" || email === "" || name === "") {
        Alert.alert("Preencha todos os campos");
      } else {
        await api.post("/users", {
          name,
          email,
          senha,
        });
        // if (cadastro) {
        signIn(email, senha);
      }
    } catch (err) {
      // console.log(err);
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
        <Input title="Nome" onChangeText={setName} value={name} />
        <Input title="Email" onChangeText={setEmail} value={email} />
        <Input
          title="Senha"
          onChangeText={setSenha}
          value={senha}
          secureTextEntry={true}
        />
        <Input
          title="Confirmar Senha"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry={true}
        />
        <Button title="Cadastrar" onPress={handleRegister} />
      </Form>
    </Container>
  );
}
