/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    interpolate,
} from "react-native-reanimated";

import DiamondEndSvg from "../../assets/diamondEnd.svg";
import DiamondStartSvg from "../../assets/diamondStart.svg";
import LogoSvg from "../../assets/qfinance.svg";
import { Container } from "./styles";

export function Splash({ navigation }: any) {
    const splashAnimation = useSharedValue(0);

    const diamondStartStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(splashAnimation.value, [0, 30, 50], [1, 0, 0]),
            transform: [
                {
                    translateX: interpolate(
                        splashAnimation.value,
                        [0, 25],
                        [0, -30]
                    ),
                },
            ],
        };
    });

    const diamondEndStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(splashAnimation.value, [0, 30, 50], [0, 0, 1]),
            transform: [
                {
                    translateX: interpolate(
                        splashAnimation.value,
                        [0, 50],
                        [-50, -50]
                    ),
                },
            ],
        };
    });

    const QFinance = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                splashAnimation.value,
                [0, 30, 50],
                [0, 0.1, 1]
            ),
            transform: [
                {
                    translateX: interpolate(
                        splashAnimation.value,
                        [0, 50],
                        [-50, 40]
                    ),
                },
                {
                    translateY: interpolate(
                        splashAnimation.value,
                        [0, 50],
                        [6, 6]
                    ),
                },
            ],
        };
    });

    useEffect(() => {
        splashAnimation.value = withTiming(50, { duration: 2000 });
    }, []);

    setTimeout(() => {
        navigation.navigate("StartPage");
    }, 4000);

    return (
        <Container>
            <Animated.View
                style={[diamondStartStyle, { position: "absolute" }]}
            >
                <DiamondStartSvg width={120} height={160} />
            </Animated.View>

            <Animated.View style={[diamondEndStyle, { position: "absolute" }]}>
                <DiamondEndSvg width={200} height={180} />
            </Animated.View>

            <Animated.View style={[QFinance, { position: "absolute" }]}>
                <LogoSvg width={140} />
            </Animated.View>
        </Container>
    );
}
