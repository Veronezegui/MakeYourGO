import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  margin-top: ${RFValue(20)}px;
`;

export const Entry = styled.TextInput.attrs({
  placeholderTextColor: '#000000'
})`
  width: 100%;
  color: #001433;
  font-size: ${RFValue(20)}px;
  border: 1px solid black;
  background-color: white;
  height: ${RFValue(45)}px;
  padding-left: ${RFValue(10)}px;

`;
