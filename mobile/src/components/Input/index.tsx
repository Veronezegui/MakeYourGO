import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import { Container, Entry } from './styles';

interface InputProps extends TextInputProps {
  title: string;
}

export function Input({ title, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

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
        {...rest}
      />
    </Container>
  );
}
