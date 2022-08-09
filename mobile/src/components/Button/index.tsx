import React from 'react'

import { Container, Touch, Title } from './styles'

interface ButtonProps {
    title: string;
    navegator ?: () => void
}

export function Button ({ title, navegator }: ButtonProps) {
  return (
        <Container>
            <Touch onPress={() => navegator && navegator()}>
                <Title>{title}</Title>
            </Touch>
        </Container>
  )
}
