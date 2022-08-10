import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes () {
  return (
   <Navigator>
    <Screen
      name="Login"
      component={}
    />
   </Navigator>
  )
}
