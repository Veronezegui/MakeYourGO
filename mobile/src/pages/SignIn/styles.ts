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
  color: #000000;
  font-size: ${RFValue(40)}px;
`;

export const Form = styled.View`
  width: 100%;
  padding: ${RFValue(0)}px ${RFValue(20)}px ${RFValue(0)}px ${RFValue(20)}px;
  justify-content: center;
  align-items: center;
  margin-top: ${RFValue(90)}px;
`;

export const Buttons = styled.View`
  width: 105%;
  flex-direction: row;
  justify-content: space-around;
`;

export const View = styled.View`
  flex-direction: row;
  position: absolute;
  right: ${RFValue(30)}px;
`;

export const TextRecoveryKey = styled.Text`
  margin-top: ${RFValue(60)}px;
  font-size: ${RFValue(15)}px;
  color: #f7b538;
`;

export const Error = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: #a52a2a;
  margin: 7px 0;
`;
