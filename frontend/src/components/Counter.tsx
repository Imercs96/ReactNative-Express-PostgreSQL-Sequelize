import React from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '../redux-toolkit/app/store';
import { decrement, increment } from '../redux-toolkit/features/Counter';

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <View>
        <Button
          title='Increment'
          onPress={() => dispatch(increment())}
        />
          
        <Text>{ count }</Text>

        <Button
          title='Decrement'
          onPress={() => dispatch(decrement())}
        />
      </View>
    </View>
  );
}