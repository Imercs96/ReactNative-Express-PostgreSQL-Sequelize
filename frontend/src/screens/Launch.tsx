import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';

import { ScreenStackParams } from '../navigation/Navigation';

type Props = NativeStackScreenProps<ScreenStackParams, 'Launch'>;

export const Launch = ({ navigation }: Props) => {
  return(
    <View>
      <Text> HOLA jvvyvjju </Text>
    </View>
  );
};
