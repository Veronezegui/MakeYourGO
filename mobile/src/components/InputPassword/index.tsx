import React, { useState } from 'react';
import { TextInputProps, TouchableOpacity } from 'react-native';

import { Container, Entry, IconTouchable } from './styles';

import { FontAwesome5 } from '@expo/vector-icons';

interface InputProps extends TextInputProps {
  title: string;
}

export function InputPassword({ title, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isPassword, setIsPassword] = useState(true);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  return (
    <Container>
      <Entry
        placeholder={title}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        secureTextEntry={isPassword}
        {...rest}
      />

      <IconTouchable
        onPress={() => setIsPassword(!isPassword)}
        isFocused={isFocused}
      >
        {isPassword === true
          ? (
            <FontAwesome5 name="eye-slash" size={24} color="black" />
          )
          : (
            <FontAwesome5 name="eye" size={24} color="black" />
          )}
      </IconTouchable>
    </Container>
  );
}
