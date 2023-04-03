import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { IconProps, TextInputProps } from '../../interfaces/components';

// Props
interface Props extends TextInputProps, IconProps {}

// Text Input Form Compoenent
export const TextInputField: ({ ...props }: Props) => JSX.Element = 
({ iconColor, iconName, iconSize, iconStyle, placeholder, onChange, value, selectionColor, placeholderTextColor, keyboardType, keyboardAppearance, secureTextEntry }) => {
  const [ isFocused, setIsFocused ] = useState<boolean>(false);
  const [ isSecureTextEntry, setIsSecureTextEntry ] = useState<boolean>(true);

  return (
    <View style={ isFocused ? 
      { ...styles.inputContainer, ...styles.inputBorder } : styles.inputContainer }
    >
      <Icon 
        name={ iconName } 
        size={ iconSize && iconSize } 
        color={ iconColor && !isFocused ? iconColor : '#C6A984'} 
        style={ iconStyle && iconStyle } 
      />
      <TextInput
        style={ styles.input }
        onChangeText={onChange}
        value={value}
        onFocus={() => setIsFocused(!isFocused)}
        onBlur={() => setIsFocused(!isFocused)}
        placeholder={ placeholder && placeholder}
        selectionColor={ selectionColor && selectionColor }
        placeholderTextColor={ placeholderTextColor && placeholderTextColor }
        keyboardType={ keyboardType }
        keyboardAppearance={ keyboardAppearance ? keyboardAppearance : 'dark' }
        secureTextEntry={ isSecureTextEntry && secureTextEntry }
      />
      { secureTextEntry &&
        <TouchableOpacity style={ styles.iconSecure } onPressIn={() => setIsSecureTextEntry(!isSecureTextEntry)}>
          <Icon 
            name={ isSecureTextEntry ? 'eye-off-outline' : 'eye-outline' } 
            size={ 20 } 
            color={ !isFocused ? 'rgba(0, 0, 0, 0.4)' : '#C6A984'} 
          /> 
        </TouchableOpacity>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    color: '#444C55',
    fontSize: 16,
    width: '80%'
  },
  inputBorder: {
    borderColor: '#C6A984',
    borderWidth: 2,
    borderStyle: 'solid'
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    height: 50,
    padding: 12,
    borderRadius: 8,
    marginVertical: 8
  },
  iconSecure: {
    width: '10%',
    paddingLeft: 8,
    justifyContent: 'center',
    alignSelf: 'center'
  }
});