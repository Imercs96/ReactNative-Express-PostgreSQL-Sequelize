import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useCountdown } from '../hooks/useCountdown';
import { ScreenStackParams } from '../navigation/Navigation';

type Props = NativeStackScreenProps<ScreenStackParams, 'Launch'>;

export const Launch = ({ navigation }: Props) => {

  const { days, hours, minutes, seconds } = useCountdown({ goalTime: 10000 });

  return(
    <SafeAreaView>
      <View>
        { days + hours + minutes + seconds >= 0 ? 
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
        }
      </View>
    </SafeAreaView>
  );
};
