import styled from 'styled-components/native';
import { BottomSheetView } from '@gorhom/bottom-sheet';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  flex: 1;
  background-color: #1b2c52;
`;

export const Card = styled(BottomSheetView)`
  width: 100%;
  padding: ${RFValue(10)}px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: #FFFFFF;
`;

export const Estimates = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: #FFFFFF;
`;

export const Options = styled.TouchableOpacity`
  padding: ${RFValue(10)}px;
  border: 1px solid #FFFFFF;
  border-radius: ${RFValue(12)}px;
  width: ${RFValue(90)}px;
  justify-content: center;
`;
