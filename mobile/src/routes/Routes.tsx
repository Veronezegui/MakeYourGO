
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AuthStack } from './AuthStack';
import { DrawerStack } from './DrawerStack';
import { AppStack } from './AppStack';
import { useAuth } from '../contexts/AuthContext';
export function Routes() {
  const { authData } = useAuth();

  return (
    <NavigationContainer>
      {authData ? <DrawerStack /> : <AppStack />}
    </NavigationContainer>
  );
}
