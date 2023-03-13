import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {DetailScreen} from '../screens/DetailScreen';
import {Movie} from '../interfaces/movieInterface';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Movie;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParams,
  'DetailScreen'
>;

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Home"
      screenOptions={{
        // headerMode: 'screen',
        // headerTintColor: 'white',
        // headerStyle: {backgroundColor: 'tomato'},
        headerShown: false,
        cardStyle: {
          // backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};
