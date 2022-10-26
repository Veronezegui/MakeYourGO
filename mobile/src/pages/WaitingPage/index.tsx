import { Container, Title } from './styles';

import { useNavigation, NavigationContainer } from '@react-navigation/native';

import LottieView from 'lottie-react-native';

import carIsometric from '../../assets/carIsometric.json';

import { Dimensions, StatusBar } from 'react-native';

import { Button } from '../../components/Button';

const size = Dimensions.get('window').width * 0.45;

export function WaitingPage() {
  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <LottieView
        source={carIsometric}
        style={{
          width: size, height: size
        }}
        autoPlay
        loop
        resizeMode='contain'
      />
      <Title>Aguardando Motorista...</Title>
      <Button
        title='Cancelar'
        navegator={() => navigation.goBack()}
        style={{
          marginTop: 40
        }}
      />
    </Container>
  );
}
