/* eslint-disable no-useless-return */
/* eslint-disable indent */
import React, { createContext, useContext, useState } from 'react';
import { authService } from '../services/authService';
import { Alert } from 'react-native';

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
  signOut: () => Promise<void>
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthContextProvider: React.FC = ({ children }) => {
  const [authData, setAuth] = useState<AuthData>();

  async function signIn(email: string, senha: string): Promise<AuthData> {
    try {
      const auth = await authService.signIn(email, senha);

      setAuth(auth);

      return auth;
    } catch (error) {
      Alert.alert(error.message, 'Credenciais erradas');
    }
  }

  async function signOut(): Promise<void> {
    setAuth(undefined);
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
