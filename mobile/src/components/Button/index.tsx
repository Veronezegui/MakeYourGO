import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Touch, Title } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  navegator?: () => void;
}

export function Button({ title, navegator, ...rest }: ButtonProps) {
  return (
    <Container>
      <Touch onPress={() => navegator && navegator()} {...rest}>
        <Title>{title}</Title>
      </Touch>
    </Container>
  );
}
