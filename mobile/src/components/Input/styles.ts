import styled, { css } from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  width: 100%;
  margin-bottom: ${RFValue(20)}px;
`;

export const Entry = styled.TextInput.attrs<Props>({
  placeholderTextColor: '#000000',
})`
  width: 100%;
  color: #001433;
  font-size: ${RFValue(20)}px;
  border: 1px solid black;
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
