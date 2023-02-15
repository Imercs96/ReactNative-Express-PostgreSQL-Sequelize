import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { publicAPI } from '../api';
import { useCountdown } from '../hooks/useCountdown';
import { ScreenStackParams } from '../navigation/Navigation';
import { Home } from './Home';

type Props = NativeStackScreenProps<ScreenStackParams, 'Launch'>;

export const Launch = ({ navigation }: Props) => {

  const [ response, setResponse ] = useState<AxiosResponse>();

  const data = {
    'email': 'bigote.pepe@mail.com',
    'password': 'bigote',
    'username': 'pepe10'
  };

  const testingRoute = async () => {
    const responseAPI = await publicAPI.post('/auth', data);
    console.log({ responseAPI });
    responseAPI && setResponse(responseAPI?.data?.token);
  };

  useEffect(() => {
    testingRoute();
  },[]);

  return(
    <SafeAreaView>
      <View>
        {/* { response && days + hours + minutes + seconds >= 0 ? 
          <>
            <Text> Days </Text>
            <Text> { days <= 9 ? `0${ days }` : `${ days }`} </Text>
            <Text> Hours </Text>
            <Text> { hours <= 9 ? `0${ hours }` : `${ hours }`} </Text>
            <Text> Minutes </Text>
            <Text> { minutes <= 9 ? `0${ minutes }` : `${ minutes }`} </Text>
            <Text> Seconds </Text>
            <Text> { seconds <= 9 ? `0${ seconds }` : `${ seconds }`} </Text>
          </>
          : 
          null
        } */}
        { response && <Home /> }
      </View>
    </SafeAreaView>
  );
};
