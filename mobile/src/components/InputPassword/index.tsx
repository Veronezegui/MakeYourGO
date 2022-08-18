import React, { useState } from 'react';

import { FontAwesome5 } from '@expo/vector-icons';

import { Container, Input, ToggleView } from './styles';
import { TextInputProps } from 'react-native';

interface InputPasswordProps extends TextInputProps {
  title: string;
}

export function InputPassword({ title }: InputPasswordProps) {
  const [isPassword, setIsPassword] = useState(true);
  return (
    <Container>
      <Input placeholder={title} secureTextEntry={isPassword} />
      <ToggleView onPress={() => setIsPassword(!isPassword)}>
        {isPassword === true
          ? (
            <FontAwesome5 name="eye-slash" size={24} color="black" />
          )
          : (
            <FontAwesome5 name="eye" size={24} color="black" />
          )}
      </ToggleView>
    </Container>
  );
}
