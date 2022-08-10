import React from 'react'

import { Container, Form, Photo } from './styles'
import Makeyourgologo from '../../assets/makeyourgo.svg'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function RegisterPage () {
  return (
        <Container>
            <Makeyourgologo />
            <Form>
                <Photo name="md-person-add-outline" size={120} color="white" />
                <Input title="Nome" />
                <Input title="Email" />
                <Input title="Senha" />
                <Input title="Confirmar Senha" />
                <Button title="Salvar" />
            </Form>
        </Container>
  )
}
