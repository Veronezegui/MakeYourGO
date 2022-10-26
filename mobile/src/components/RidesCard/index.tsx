import React, { useState } from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
  Container,
  Card,
  Title,
  Estimates,
  Options
} from './styles';

interface OptionsProps extends TouchableOpacityProps {
  title: string;
  timeEstimate: string;
  priceEstimate: string;
}

export function RidesCard({ title, priceEstimate, timeEstimate, ...rest }: OptionsProps) {
  return (
    <Container>
      <Card>
        <Options
          {...rest}

        >
          <Title
          >{title}</Title>
          <Estimates

          >{priceEstimate}</Estimates>
          <Estimates

          >{timeEstimate}</Estimates>
        </Options>
      </Card>
    </Container >
  );
}
