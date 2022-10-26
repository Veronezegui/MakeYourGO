/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-unused-vars */
import React, { useEffect, useCallback } from 'react';

import { AuthContextProvider } from './src/contexts/AuthContext';

import {
  useFonts,
  Montserrat_300Light,
  Montserrat_600SemiBold,
  Montserrat_400Regular
} from '@expo-google-fonts/montserrat';

import { ThemeProvider } from 'styled-components/native';

import theme from './src/global/styles/theme';

import * as SplashScreen from 'expo-splash-screen';

import { Routes } from './src/routes/Routes';
import { KeyboardAvoidingView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_600SemiBold,
    Montserrat_400Regular
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (error) {
        console.log(error);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <KeyboardAvoidingView onLayout={onLayoutRootView} />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
