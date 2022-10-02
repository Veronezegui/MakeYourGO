import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #0f172a;
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center;

  margin-top: 45px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  color: #4ade80;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  margin-top: 45px;
`;

export const Message = styled.Text`
  font-size: ${RFValue(15)}px;
  color: #f6f6f6;
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: ${RFValue(25)}px;
  text-align: center;
  margin-top: 15px;
`;

export const Footer = styled.View`
  margin-top: 45px;
  width: 100%;
  align-items: center;
`;
