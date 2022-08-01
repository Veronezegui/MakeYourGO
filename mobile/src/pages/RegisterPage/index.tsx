import React from "react";

import { Container, Form, Title } from "./styles";

import { Input } from "../../components/Input";

import { Button } from "../../components/Button";

export function RegisterPage() {
    return (
        <Container>
            <Title>Cadastro</Title>
            <Form>
                <Input title="Nome" />
                <Input title="Email" />
                <Input title="Senha" />
                <Input title="Confirmar Senha" />
                <Button title="Salvar" />
            </Form>
        </Container>
    )
}