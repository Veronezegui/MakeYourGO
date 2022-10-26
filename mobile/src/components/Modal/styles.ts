import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';

export const ConfirmModal = styled(Modal)`
  align-items: center;
  justify-content: center;
  width: 100% ;
`;

export const ModalView = styled.View`
  border-radius: ${RFValue(10)}px;
  align-items: center;
  width: 90%;
  height: ${RFValue(400)}px;
  background-color: #FFFFFF;
  position: absolute;
  bottom: 10px;
  padding: ${RFValue(20)}px ${RFValue(0)}px ${RFValue(20)}px ${RFValue(0)}px;
`;

export const ModalTop = styled.View`
  width: 100%;
  align-items: center;
`;

export const ModalBody = styled.View`
  width: 100%;
  padding: ${RFValue(0)}px ${RFValue(20)}px ${RFValue(0)}px ${RFValue(20)}px;
  height: ${RFValue(280)}px;
`;

export const ModalBottom = styled.View`
  width: 90%;
  height: ${RFValue(90)}px;
  justify-content: space-around;
  flex-direction: row;
`;

export const ConfirmButtonView = styled.View`
  width: 50%;
  margin-right: ${RFValue(60)}px;
`;

export const CancelButtonView = styled.View`
  width: 50%;
`;

export const Title = styled.Text`
  color: #000000;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${RFValue(18)}px;
  padding: ${RFValue(10)}px;
`;
