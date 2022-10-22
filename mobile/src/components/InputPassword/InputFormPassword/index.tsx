import React, { useState } from "react";
import { TextInputProps } from "react-native";

import { Control, Controller } from "react-hook-form";

import { Container } from "./styles";
import { InputPassword } from "..";

interface InputProps extends TextInputProps {
  control: Control;
  name: string;
  error: boolean;
  title: string;
}

export function InputFormPassword({
  title,
  control,
  name,
  error = false,
  ...rest
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  return (
    <Container>
      <Container>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputPassword
              title={title}
              onChangeText={onChange}
              value={value}
              {...rest}
              error={error}
            />
          )}
          name={name}
        />
      </Container>
    </Container>
  );
}
