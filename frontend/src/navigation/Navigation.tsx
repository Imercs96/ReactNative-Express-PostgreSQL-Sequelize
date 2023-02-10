//Native components and libraries
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

//Screens
import { Launch } from '../screens/Launch';

// Screen Stack props
export type ScreenStackParams = {
  Launch: undefined
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
      <Stack.Screen
        name="Launch"
        component={ Launch }
        options={{ title: 'Splash Art & Deco' }}
      />
    </Stack.Navigator>
  );
};
