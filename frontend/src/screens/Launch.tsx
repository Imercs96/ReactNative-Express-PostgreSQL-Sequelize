import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ScreenStackParams } from '../navigation/Navigation';
import { useAppSelector } from '../redux-toolkit/app/hooks';
import { RootStateProps } from '../redux-toolkit/app/store';
import { Home } from './Home';

type Props = NativeStackScreenProps<ScreenStackParams, 'Launch'>;

export const Launch = ({ navigation }: Props) => {

  const selector = useAppSelector((state: RootStateProps) => state);

  useEffect(() => {
    navigation.push('Home');
  }, [ selector.auth.jwt.token ]);

  return (
    <SafeAreaView>
      <View>
        { selector.auth.jwt.token ?
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text> Go to Home </Text>
          </TouchableOpacity>
          :
          <>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text> Go to SignIn </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text> Go to Register </Text>
            </TouchableOpacity>
          </>
        }
        {/* <Home /> */}
      </View>
    </SafeAreaView>
  );
};
