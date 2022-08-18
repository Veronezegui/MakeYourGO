/* eslint-disable indent */
import React from 'react';

import { Button } from '../../components/Button';
import { useAuth } from '../../contexts/AuthContext';

import { Container, Map } from './styles';

export function MapPage() {
  const { signOut } = useAuth();
  return (
    <Container>
      <Map />
      <Button title="Sair" onPress={signOut} />
    </Container>
  );
}
