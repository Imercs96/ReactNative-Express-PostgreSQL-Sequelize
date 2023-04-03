import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { IconProps } from '../../interfaces/components';

interface Props extends IconProps {
  message: string
}

export const ErrorMessage: ({ ...props }: Props) => JSX.Element = 
({ message, iconColor, iconName, iconSize, iconStyle }) => {
  return (
    <View style={ styles.container }>
      <Icon 
        name={ iconName && iconName} 
        size={ iconSize && iconSize } 
        color={ iconColor && iconColor} 
        style={ iconStyle ? iconStyle && styles.icon : styles.icon } 
      />
      <Text style={ styles.text }> { message } </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingVertical: 5,
    backgroundColor: '#rgba(245, 236, 214, 0.7)',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row'
    
  },
  text: {
    color: '#2E3338',
    fontSize: 14,
    alignSelf: 'center',
    lineHeight: 18
  },
  icon: {
    marginRight: 16,
    justifyContent: 'center',
    alignSelf: 'center'
  }
});
