import { Text, View } from 'react-native';

import { useCountdown } from '../hooks/useCountdown';

export const Home = () => {
  const { days, hours, minutes, seconds } = useCountdown({ goalTime: 72000 });

  return(
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
  );
};