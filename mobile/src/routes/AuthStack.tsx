import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MapPage } from '../pages/MapPage';

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='MapPage' component={MapPage} />
    </Stack.Navigator>
  );
}
