import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container  = styled.View`
    width: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
`;

export const Title = styled.Text`
    color: #000000;
    font-size: ${RFValue(40)}px;
`;

export const Carro = styled.ImageBackground`
    margin-top: ${RFValue(30)}px;
    width: 100%;
    height: ${RFValue(290)}px;
`;

export const Form = styled.View`
    width: 100%;
    padding: ${RFValue(40)}px;
    justify-content: center;
    align-items: center;
`;

export const SmallText = styled.Text`
    font-size: ${RFValue(14)}px;
    color: #000;
    margin-top: ${RFValue(10)}px;
    text-decoration: underline;
`;
