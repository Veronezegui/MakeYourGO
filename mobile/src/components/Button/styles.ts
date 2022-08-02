import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
    width: 100%;
    align-items: center;
`

export const Touch = styled.TouchableOpacity`
    background-color: #E28037;
    width: 40%;
    align-items: center;
    justify-content: center;
    padding: ${RFValue(8)}px;
    border-radius: ${RFValue(8)}px;
`

export const Title = styled.Text`
    color: #FFFFFF;
    font-weight: bold;
    font-size: ${RFValue(16)}px;
`
