import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #0f172a;
`;

export const Title = styled.Text`
  color: #f6f6f6;
  font-size: ${RFValue(28)}px;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  color: #f2e546;
  font-size: ${RFValue(28)}px;
  font-weight: bold;
  margin-top: 15px;
`;
