import React from 'react'
import { TextInputProps } from 'react-native'

import { Container, Entry } from './styles'

interface InputProps extends TextInputProps {
    title: string;

}

export function Input ({ title, ...rest }: InputProps) {
  return (
        <Container>
            <Entry placeholder={title} {...rest}/>

        </Container>
  )
}
