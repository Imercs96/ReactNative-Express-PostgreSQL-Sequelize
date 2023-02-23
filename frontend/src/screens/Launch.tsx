import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Counter } from '../components/Counter';
import { ScreenStackParams } from '../navigation/Navigation';
import { Home } from './Home';

type Props = NativeStackScreenProps<ScreenStackParams, 'Launch'>;

export const Launch = ({ navigation }: Props) => {
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text> Go to Login </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text> Go to Register </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text> Go to Home </Text>
        </TouchableOpacity>
        <Counter/>
        <Home />
      </View>
    </SafeAreaView>
  );
};
