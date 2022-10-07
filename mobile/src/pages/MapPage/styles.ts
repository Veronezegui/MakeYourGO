import { BottomSheetView } from '@gorhom/bottom-sheet';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
    flex: 1;
`;

export const Bottom = styled(BottomSheetView)`
    justify-content: space-around;
    width: 100%;
    height: 100%;
    background-color: #1b2c52;
`;

export const PlaceView = styled.View`
  width: 100%;
  padding: ${RFValue(20)}px;
  position: absolute;
  top: ${RFValue(60)}px;
`;

export const Options = styled.View`
  padding: ${RFValue(10)}px;
`;

export const CardsOptions = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: #FFFFFF;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${RFValue(20)}px;
  padding: ${RFValue(10)}px;
  text-align: center;
  margin-bottom: ${RFValue(30)}px;
`;

export const OptionsList = styled.FlatList`
`;

export const ModalDetails = styled.View`
  margin-top: ${RFValue(10)}px;
  flex-direction: row;
  justify-content: space-between;
  padding: ${RFValue(0)}px ${RFValue(10)}px ${RFValue(0)}px ${RFValue(10)}px;
`;

export const ModalText = styled.Text`
  color: #000000;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${RFValue(16)}px;
  text-align: left;
  margin-bottom: ${RFValue(6)}px;
`;

export const ModalApp = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  margin-bottom: ${RFValue(10)}px;
`;

export const ModalPrice = styled.Text`
  color: #16db65;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.semiBold}
`;
