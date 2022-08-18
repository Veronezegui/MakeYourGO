import React from 'react'

import { Container, Touch, Title } from './styles'

interface ButtonProps {
    title: string;
    onPress ?: () => void
}

export function GoogleButton ({ title, onPress }: ButtonProps) {
  return (
        <Container>
            <Touch onPress={() => onPress && onPress()}>
                <Title>{title}</Title>
            </Touch>
        </Container>
  )
}
