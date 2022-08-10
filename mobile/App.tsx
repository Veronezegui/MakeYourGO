/* eslint-disable no-unused-vars */
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomePage } from './src/pages/HomePage'
import { RegisterPage } from './src/pages/RegisterPage'

const Stack = createNativeStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomePage'>
        <Stack.Screen
          name='HomePage'
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='RegisterPage'
          component={RegisterPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
