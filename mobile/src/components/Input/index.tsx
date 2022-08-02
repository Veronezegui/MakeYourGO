import React from 'react'
import { TextInputProps } from 'react-native'

import { Container, Entry } from './styles'

interface InputProps {
    title: string;

}

export function Input ({ title }: InputProps) {
  return (
        <Container>
            <Entry placeholder={title}/>
        </Container>
  )
}
