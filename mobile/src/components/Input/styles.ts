import { TextInput } from 'react-native'
import styled from 'styled-components/native'

import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    width: 100%;
    margin-bottom: ${RFValue(20)}px;
    
`

export const Entry = styled.TextInput.attrs({
  placeholderTextColor: '#32292F'
})`
    width: 100%;
    color: #32292F;
    font-size: ${RFValue(14)}px;
    border: 2px solid black;
    border-radius: ${RFValue(15)}px;
    height: ${RFValue(30)}px;
    padding-left: ${RFValue(10)}px;
    
`

export const Line = styled.View`
    width: 100%;
    height: ${RFValue(1)}px;
    background-color: #000000;
`
