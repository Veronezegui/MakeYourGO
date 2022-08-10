import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height:${RFValue(200)}px;
  justify-content: center;
  align-items: center;

`

export const LogoImg = styled.Image`
  width: ${RFValue(400)}px;
  height: ${RFValue(200)}px;

`
