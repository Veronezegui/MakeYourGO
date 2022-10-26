import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Text, Touch } from './styles';

interface LinkProps extends TouchableOpacityProps {
  title: string;
  navegator?: () => void;
  textColor: string
}

export function Link({ textColor, title, navegator, ...rest }: LinkProps) {
  return (
    <Container>
      <Touch onPress={() => navegator && navegator()} {...rest} >
        <Text
          {...rest}
          style={{
            color: textColor
          }}
        >{title}</Text>
      </Touch>
    </Container >
  );
}
