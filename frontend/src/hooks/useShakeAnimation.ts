import { useCallback, useRef } from 'react';
import { Animated } from 'react-native';

export const useShakeAnimation = () => {
  const animationRef = useRef(new Animated.Value(0));

  const shake = useCallback(() => {
    // Makes the sequence loop
    Animated.loop(
      // Runs the animation array in sequence
      Animated.sequence([
        // Shift element to the left by 5 units
        Animated.timing(animationRef.current, { 
          toValue: -5, 
          duration: 25, 
          useNativeDriver: true
        }),
        // Shift element to the right by 5 units
        Animated.timing(animationRef.current, {
          toValue: 5,
          duration: 25,
          useNativeDriver: true
        }),
        // Bring the element back to its original position
        Animated.timing(animationRef.current, {
          toValue: 0,
          duration: 25,
          useNativeDriver: true
        })
      ]),
      // Loops the above animation config 2 times
      { iterations: 2 }
    ).start();
  }, []);

  return { animationRef, shake };
};
