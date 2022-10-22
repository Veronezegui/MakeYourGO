import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Content = styled.View`
  margin-top: ${RFValue(20)}px;
`;

export const Header = styled.View`
  padding: ${RFValue(15)}px ${RFValue(20)}px;
`;

export const Title = styled.Text`
  margin-top: ${RFValue(25)}px;
  font-size: ${RFValue(28)}px;
  font-weight: 600;
  color: #0f172a;
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(15)}px;
  color: #0f172a;
`;

export const ButtonView = styled.View`
  margin-top: 20px;
  background-color: #cfcedd;
`;

export const TitleButton = styled.Text`
  margin-left: 10px;
  font-size: 18px;
`;

export const ButtonNavigation = styled.TouchableOpacity`
  padding: ${RFValue(15)}px ${RFValue(20)}px;
  flex-direction: row;
`;

export const ButtonExitView = styled.View`
  margin-bottom: 20px;
  align-items: center;
`;

export const DeslogButton = styled.TouchableOpacity``;

export const TitleExitButton = styled.Text`
  font-size: 18px;
`;

export const LineSpacing = styled.View`
  width: 80%;
  height: 0.5px;

  background-color: #0f172a;
`;
