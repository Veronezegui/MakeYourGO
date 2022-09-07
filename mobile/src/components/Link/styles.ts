import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: ${RFValue(60)}px;
  width: 100%;
`;

export const Touch = styled.TouchableOpacity`
  width: 100%;
`;

export const Text = styled.Text`
  font-size: ${RFValue(15)}px;
  color: #f7b538;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.semiBold}
`;
