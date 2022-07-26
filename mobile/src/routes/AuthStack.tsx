import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MapPage } from '../pages/MapPage';
import { WaitingPage } from '../pages/WaitingPage';

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='MapPage' component={MapPage} options={{ headerShown: false }} />
      <Stack.Screen name='WaitingPage' component={WaitingPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
