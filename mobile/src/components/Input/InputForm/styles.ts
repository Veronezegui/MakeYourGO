import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";

interface Props {
  error: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const Error = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: #a52a2a;
  margin: 7px 0;
`;
