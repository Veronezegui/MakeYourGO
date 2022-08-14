import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #001433;
`;

export const Title = styled.Text`
  color: #000000;
  font-size: ${RFValue(40)}px;
`;

export const Form = styled.View`
  width: ${RFPercentage(52)}px
  justify-content: center;
  align-items: center;
  margin-top: ${RFValue(90)}px;
`;

export const Buttons = styled.View`
  width: 105%;
  flex-direction: row;
  justify-content: space-around;

  margin-top: ${RFValue(46)}px;
`;

export const ButtonRecoveryKey = styled.TouchableOpacity`
  width: 100%;
  margin-top: ${RFValue(6)}px;
`;

export const TextRecovery = styled.Text`
  text-align: right;
  font-size: ${RFValue(14)}px;
  color: #f7b538;
`;
