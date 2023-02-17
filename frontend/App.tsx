import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';

import { Navigation } from './src/navigation/Navigation';
import { store } from './src/redux-toolkit/app/store';

export const App: () => JSX.Element = () => {
  return (
    <NavigationContainer>
      <Provider store={ store }>
        <Navigation />
      </Provider>
    </NavigationContainer>
  );
};
