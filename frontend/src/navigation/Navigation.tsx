//Native components and libraries
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

//Screens
import { Home } from '../screens/Home';
import { Launch } from '../screens/Launch';
import { Register } from '../screens/Register';
import { SignIn } from '../screens/SignIn';

// Screen Stack props
export type ScreenStackParams = {
  Launch: undefined;
  SignIn: undefined;
  Register: undefined;
  Home: undefined;
}

const Stack = createNativeStackNavigator<ScreenStackParams>();

export const Navigation: () => JSX.Element = () => {
  return (
    <Stack.Navigator
      initialRouteName="Launch"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={ Home } options={{ headerShown: true }}/>
      <Stack.Screen name="SignIn" component={ SignIn }/>
      <Stack.Screen name="Register" component={ Register } options={{ headerShown: true }}/>
      <Stack.Screen
        name="Launch"
        component={ Launch }
        options={{ title: 'Splash Art & Deco' }}
      />
    </Stack.Navigator>
  );
};
