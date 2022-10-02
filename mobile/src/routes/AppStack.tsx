import React from "react";
import { RegisterPage } from "../pages/RegisterPage";
import { SignIn } from "../pages/SignIn";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ForgotPasswordFirstStep } from "../pages/ForgotPasswordPage/ForgotPasswordFirstStep";
import { ForgotPasswordSecondStep } from "../pages/ForgotPasswordPage/ForgotPasswordSecondStep";
import { Confirmation } from "../pages/ConfirmationPage";

export type RootStackParamList = {
  SignInPage: undefined;
  RegisterPage: undefined;
  ForgotPasswordFirstStep: undefined;
  ForgotPasswordSecondStep: undefined;
  Confirmation: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignInPage"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterPage"
        component={RegisterPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPasswordFirstStep"
        component={ForgotPasswordFirstStep}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPasswordSecondStep"
        component={ForgotPasswordSecondStep}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Confirmation"
        component={Confirmation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
