import React, {FC, useEffect} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useFade} from '../hooks/useFade';
import {useGradient} from '../hooks/useGradient';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground: FC<Props> = ({children}) => {
  const {colors, prevColors, setPrevMainColors} = useGradient();
  const {opacity, fadeIn, fadeOut} = useFade();

  useEffect(() => {
    fadeIn(() => {
      setPrevMainColors(colors);
      fadeOut();
    });
  }, [colors]);

  const {primary, secondary} = colors;
  return (
    <View style={{flex: 1, backgroundColor: 'transparent'}}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, 'white']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.6, y: 0.7}}
      />
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          opacity,
        }}>
        <LinearGradient
          colors={[primary, secondary, 'white']}
          style={{...StyleSheet.absoluteFillObject}}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.6, y: 0.7}}
        />
      </Animated.View>
      {children}
    </View>
  );
};
