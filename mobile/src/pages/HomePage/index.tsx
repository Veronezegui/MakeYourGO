import React from "react";

import { Container, Title, Carro, Form, SmallText } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function HomePage() {
    return (
        <Container>
            <Title>MakeYourGO</Title>
            <Carro source={require('../../assets/image.jpg')} resizeMode="cover"/>
            <Form>
                <Input title="Email"/>
                <Input title="Senha"/>
                <Button title="Entrar"/>
                <SmallText>Cadastre-se já</SmallText>
            </Form>
            
        </Container>
    )
}