import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ScreenStackParams } from '../navigation/Navigation';
import { Home } from './Home';

type Props = NativeStackScreenProps<ScreenStackParams, 'Launch'>;

export const Launch = ({ navigation }: Props) => {
  return (
    <SafeAreaView>
      <View>
        <Home />
      </View>
    </SafeAreaView>
  );
};
