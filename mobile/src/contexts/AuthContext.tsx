/* eslint-disable no-useless-return */
/* eslint-disable indent */
import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authService } from '../services/authService';
import { Alert } from 'react-native';
import { api } from '../services/api';

export interface AuthData {
  id: string;
  name: string;
  email: string;
  senha: string;
  created_at?: Date;
}

interface AuthContextData {
  authData?: AuthData;
  signIn: (email: string, senha: string) => Promise<AuthData>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthContextProvider: React.FC = ({ children }) => {
  const [authData, setAuth] = useState<AuthData>();

  useEffect(() => {
    loadFromStorage();
  }, []);

  async function loadFromStorage() {
    const auth = await AsyncStorage.getItem('@AuthData');
    if (auth) {
      setAuth(JSON.parse(auth) as AuthData);
    }
  }

  async function signIn(email: string, senha: string): Promise<AuthData> {
    try {
      const response = await api.post('/users/login', {
        email,
        senha
      });

      const { token, user } = response.data;
      console.log(user);

      if (user) {
        setAuth(user);
      }

      AsyncStorage.setItem('@AuthData', JSON.stringify(user));
    } catch (error) {
      Alert.alert('Credenciais erradas');
    }
  }

  async function signOut(): Promise<void> {
    setAuth(undefined);
    AsyncStorage.removeItem('@AuthData');

    return;
  }

  return (
    <AuthContext.Provider value={{ authData, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
