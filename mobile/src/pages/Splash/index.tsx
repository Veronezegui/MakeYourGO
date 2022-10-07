import React, { useEffect } from 'react';
import { Container, LogoView } from './styles';

import LottieView from 'lottie-react-native';
import splashJson from '../../assets/animation-splash.json';
import LogoEscritaSvg from '../../assets/makeyourgo.svg';
import LogoSvg from '../../assets/logo.svg';

import { Dimensions } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
  runOnJS
} from 'react-native-reanimated';

const size = Dimensions.get('window').width * 0.65;

export const Splash: React.FC = () => {
  const navigation = useNavigation();

  const splashAnimation = useSharedValue(0);

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
      transform: [
        {
          translateY: interpolate(
            splashAnimation.value,
            [0, -150],
            [0, 150],
            Extrapolate.CLAMP
          )
        }
      ]
    };
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 25, 150], [0, 0.3, 1]),
      transform: [
        {
          translateY: interpolate(
            splashAnimation.value,
            [0, 150],
            [150, -50],
            Extrapolate.CLAMP
          )
        }
      ]
    };
  });

  useEffect(() => {
    splashAnimation.value = withTiming(150, { duration: 2000 }, () => {
      'workelet';
    });

    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'SignInPage' }]
        })
      );
    }, 4800);
  }, []);

  return (
    <Container>
      <LogoView>
        {/* <Animated.View style={[brandStyle]}>
          <LogoSvg />
        </Animated.View> */}

        <Animated.View style={[logoStyle]}>
          <LogoEscritaSvg />
        </Animated.View>
      </LogoView>
      <LottieView
        source={splashJson}
        style={{ width: size, height: size }}
        autoPlay
        loop
        resizeMode="contain"
      />
    </Container>
  );
};
