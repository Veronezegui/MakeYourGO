import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// screens
import { MapPage } from '../pages/MapPage';
import { WaitingPage } from '../pages/WaitingPage';

// components
import CustomDrawerContent from '../components/Drawer';

const Drawer = createDrawerNavigator();

export function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen
        name="MapPage"
        component={MapPage}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="WaitingPage"
        component={WaitingPage}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
