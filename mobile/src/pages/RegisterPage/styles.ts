import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #001433;
`;

export const View = styled.View`
  flex-direction: row;
  position: absolute;
  right: ${RFValue(30)}px;
`;

export const Form = styled.View`
  width: 100%;
  padding: ${RFValue(0)}px ${RFValue(20)}px ${RFValue(0)}px ${RFValue(20)}px;
  justify-content: center;
  align-items: center;
  margin-top: ${RFValue(40)}px;
`;

export const Title = styled.Text`
  color: #FFFFFF;
  font-size: ${RFValue(40)}px;
  margin-top: ${RFValue(80)}px;
`;
