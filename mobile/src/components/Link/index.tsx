import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Text, Touch } from './styles';

interface LinkProps extends TouchableOpacityProps {
  title: string;
  navegator?: () => void
}

export function Link({ title, navegator, ...rest }: LinkProps) {
  return (
    <Container>
      <Touch onPress={() => navegator && navegator()} {...rest} >
        <Text>{title}</Text>
      </Touch>
    </Container>
  );
}
