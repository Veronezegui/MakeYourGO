import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
`;

export const Form = styled.View`
    width: 100%;
    padding: ${RFValue(40)}px;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color: #000000;
    font-size: ${RFValue(40)}px;
`;