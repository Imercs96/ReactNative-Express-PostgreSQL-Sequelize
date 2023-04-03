import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Background Props
interface BackgroundProps {
  children?: JSX.Element | JSX.Element[]
  source?: ImageSourcePropType | undefined
}

export const BackgroundGradient: ({ children, source }: BackgroundProps) => JSX.Element = 
({ source }) => {
  return (
    <View style={ styles.container }>
      { source && <Image 
        source={ source } 
        style={ styles.backgroundImage }
      /> }
      <LinearGradient 
        colors={[ '#rgba(240, 236, 233, 1)', '#rgba(232, 231, 229, 0)' ]} 
        start={{ x: 0.5, y: 0.0 }} 
        end={{ x: 0.5, y: 1.0 }}
        locations={[ 0.211, 1 ]}
        style={ styles.linearGradient }
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: -1,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0
  },
  backgroundImage: {
    flex: 1,
    width: '100%', 
    position: 'absolute',
    bottom: -45
  },
  linearGradient: {
    flex: 1
  }
});