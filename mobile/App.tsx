/* eslint-disable space-before-function-paren */
/* eslint-disable no-unused-vars */
import React from 'react';
import { AuthContextProvider } from './src/contexts/AuthContext';

import { Routes } from './src/routes/Routes';

export default function App() {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  );
}
