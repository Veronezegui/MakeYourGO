import React, { useState } from "react";

import { FontAwesome5 } from "@expo/vector-icons";

import { Container, Input, ToggleView } from "./styles";
import { TextInputProps } from "react-native";

interface InputPasswordProps extends TextInputProps {
  title: string;
  error?: boolean;
}

export function InputPassword({ title, error, ...rest }: InputPasswordProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisivle] = useState(true);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  function handlePasswordVisibilityChange() {
    setIsPasswordVisivle((prevState) => !prevState);
  }

  return (
    <Container error={error}>
      <Input
        placeholder={title}
        secureTextEntry={isPasswordVisible}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        error={error}
        {...rest}
      />
      <ToggleView onPress={handlePasswordVisibilityChange}>
        {isPasswordVisible === true ? (
          <FontAwesome5 name="eye-slash" size={22} color="#3f3f46" />
        ) : (
          <FontAwesome5 name="eye" size={22} color="#3f3f46" />
        )}
      </ToggleView>
    </Container>
  );
}
