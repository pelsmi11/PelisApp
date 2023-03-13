import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/navigation/Navigation';
import {FadeScreen} from './src/screens/FadeScreen';
import {GradientProvider} from './src/context/GradientContext';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const AppState: FC<Props> = ({children}) => {
  return <GradientProvider>{children}</GradientProvider>;
};

export default function App() {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
        {/* <FadeScreen /> */}
      </AppState>
    </NavigationContainer>
  );
}
