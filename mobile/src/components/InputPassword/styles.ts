import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
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