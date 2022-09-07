import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  align-items: center;
`;

export const Touch = styled.TouchableOpacity`
  background-color: #f7b538;
  width: 45%;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(8)}px;
  border-radius: ${RFValue(6)}px;
`;

export const Title = styled.Text`
  color: #001433;
  font-weight: bold;
  font-size: ${RFValue(16)}px;
`;
