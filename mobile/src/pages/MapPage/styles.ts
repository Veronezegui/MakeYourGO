import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
    flex: 1;
`;

export const Map = styled.View`
    width: 100%;
    height: ${RFValue(300)}px;
`;
