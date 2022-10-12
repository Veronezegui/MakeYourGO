import React, { useState } from "react";
import { TextInputProps } from "react-native";

import { Container, Entry } from "./styles";

interface InputProps extends TextInputProps {
  active?: boolean;
  title: string;
  error?: boolean;
}

export function Input({ title, error = false, ...rest }: InputProps) {
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
        required
        placeholder={title}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        error={error}
        {...rest}
      />
    </Container>
  );
}
