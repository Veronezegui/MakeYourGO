import { TextInput } from "react-native";
import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: 100%;
    margin-bottom: ${RFValue(20)}px;
`;

export const Entry = styled.TextInput.attrs({
    placeholderTextColor:"black",
})`
    width: 100%;
    color: #000000;
    font-size: ${RFValue(16)}px;
`;

export const Line = styled.View`
    width: 100%;
    height: ${RFValue(1)}px;
    background-color: #000000;
`;