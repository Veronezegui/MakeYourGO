import styled, { css } from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;

  margin-top: ${RFValue(20)}px;

  border: 1px solid black;
`;

export const Entry = styled.TextInput.attrs<Props>({
  placeholderTextColor: '#000000'
})`
  flex: 1;
  color: #001433;
  font-size: ${RFValue(20)}px;
  background-color: white;
  height: ${RFValue(45)}px;
  padding-left: ${RFValue(10)}px;

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: #fbbf24;
    `}
`;

export const IconTouchable = styled.TouchableOpacity<Props>`
  height: ${RFValue(45)}px;
  width: 55px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: #fbbf24;
    `}
`;
