import { BottomSheetView } from "@gorhom/bottom-sheet";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  flex: 1;
`;

export const Bottom = styled(BottomSheetView)`
  justify-content: space-around;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const PlaceView = styled.View`
  width: 100%;
  padding: ${RFValue(20)}px;
  position: absolute;
  top: ${RFValue(80)}px;
`;

export const DrawerOpenButton = styled.TouchableOpacity`
  position: absolute;
  left: ${RFValue(23)}px;
  top: ${RFValue(55)}px;
`;
