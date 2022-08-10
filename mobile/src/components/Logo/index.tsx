import React from 'react'
import { Container, LogoImg } from './styles'

export function Logo () {
  return (
    <Container>
      <LogoImg source={require('../../assets/makeyourgo.svg')} />
    </Container>
  )
}
