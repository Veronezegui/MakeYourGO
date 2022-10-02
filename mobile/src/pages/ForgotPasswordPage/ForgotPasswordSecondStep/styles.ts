import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;

  background-color: #0f172a;
`;

export const Logo = styled.View`
  align-items: center;
`;

export const Form = styled.View`
  width: 100%;
  padding: ${RFValue(0)}px ${RFValue(40)}px ${RFValue(0)}px ${RFValue(40)}px;
  justify-content: center;
  align-items: center;
  margin-top: ${RFValue(40)}px;
`;

export const TitleDiv = styled.View`
  margin-left: ${RFValue(40)}px;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: ${RFValue(25)}px;
  margin-top: ${RFValue(80)}px;
`;

export const Subtitle = styled.Text`
  color: #ffffff;
  font-size: ${RFValue(18)}px;
  margin-top: ${RFValue(20)}px;
`;
