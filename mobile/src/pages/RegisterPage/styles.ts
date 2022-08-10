import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Ionicons } from '@expo/vector-icons'

export const Container = styled.View`
    width: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #001433;
`

export const Form = styled.View`
    width: 100%;
    padding: ${RFValue(0)}px ${RFValue(20)}px ${RFValue(0)}px ${RFValue(20)}px;
    justify-content: center;
    align-items: center;
`

export const Title = styled.Text`
    color: #000000;
    font-size: ${RFValue(40)}px;
`

export const Photo = styled(Ionicons)`
    margin-bottom: ${RFValue(40)}px;
    margin-top:${RFValue(40)}px ;
`
