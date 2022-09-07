import styled from 'styled-components/native';
import { BottomSheetView } from '@gorhom/bottom-sheet';

export const Container = styled.View`
  width: 100%;
  flex: 1;
`;

export const Card = styled(BottomSheetView)`
    justify-content: space-around;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background};
`;
