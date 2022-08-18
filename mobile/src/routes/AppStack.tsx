import React from 'react';
import { RegisterPage } from '../pages/RegisterPage';
import { SignIn } from '../pages/SignIn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  SignInPage: undefined;
  RegisterPage: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='SignInPage' component={SignIn} />
      <Stack.Screen name='RegisterPage' component={RegisterPage} />
    </Stack.Navigator>
  );
}