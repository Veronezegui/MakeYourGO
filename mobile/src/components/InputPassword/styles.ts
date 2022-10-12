import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface Props {
  error: boolean;
}

export const Container = styled.View<Props>`
  width: 100%;
  margin-bottom: ${RFValue(20)}px;
`;

export const ToggleView = styled.TouchableOpacity`
  height: ${RFValue(30)}px;
  position: absolute;
  right: ${RFValue(20)}px;
  top: ${RFValue(12)}px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#000000",
})<Props>`
  width: 100%;
  color: #001433;
  font-size: ${RFValue(16)}px;
  border: 1px solid black;
  border-radius: ${RFValue(6)}px;
  background-color: white;
  height: ${RFValue(45)}px;
  padding-left: ${RFValue(10)}px;

  font-family: ${({ theme }) => theme.fonts.regular};

  ${({ error }) =>
    error &&
    css`
      border-width: 3px;
      border-color: #a52a2a;
    `}
`;
