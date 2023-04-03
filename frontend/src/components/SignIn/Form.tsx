import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { useShakeAnimation } from '../../hooks/useShakeAnimation';
import { UserSignInValues } from '../../interfaces/user';
import { useAppSelector } from '../../redux-toolkit/app/hooks';
import { RootStateProps } from '../../redux-toolkit/app/store';
import { singInRequest } from '../../redux-toolkit/features/auth';
import { ErrorMessage } from '../Form/ErrorMessage';
import { TextInputField } from '../Form/TextInputField';

export const Form: (initialState: UserSignInValues) => JSX.Element = (initialState) => {
  // useForm Hook
  const { control, handleSubmit, formState: { errors }} = useForm({ 
    defaultValues: initialState 
  });
  
  // Statements
  const { status } = useAppSelector((state: RootStateProps) => state?.auth);
  const { animationRef, shake } = useShakeAnimation();
  const onSubmitRef = useRef<boolean>(false);

  // Dispatch
  const dispatch = useDispatch<ThunkDispatch<UserSignInValues, Action, any>>();

  // onSubmit Handler
  const onSubmit = (data: UserSignInValues) => {
    onSubmitRef.current = true;
    dispatch(singInRequest(data));
  };

  return (
    <Animated.View 
      style={{ transform: [{ translateX: animationRef.current }] }}
    >
      <View 
        style={ styles.container } 
        ref={ onSubmitRef.current && status == 'not-authenticated' ? shake : null }>
        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, value } }) => 
            <TextInputField 
              iconName='person-outline'
              iconSize={ 20 }
              iconColor='rgba(0, 0, 0, 0.4)'
              iconStyle={ styles.icon }
              onChange={ onChange } 
              value={ value } 
              placeholder='Username'
              selectionColor='#444C55'
              placeholderTextColor='rgba(0, 0, 0, 0.4)'
              keyboardType='default'
            />
          }
          name='username'
        />
        { errors?.username && 
          <ErrorMessage 
            message='This username field is required'
            iconName='warning-outline'
            iconColor='#2E3338'
            iconSize={ 20 }
          /> 
        }

        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, value } }) => (
            <TextInputField 
              iconName='mail-outline'
              iconSize={ 20 }
              iconColor='rgba(0, 0, 0, 0.4)'
              iconStyle={ styles.icon }
              onChange={ onChange } 
              value={ value } 
              placeholder='Email'
              selectionColor='#444C55'
              placeholderTextColor='rgba(0, 0, 0, 0.4)'
              keyboardType='email-address'
            />
          )}
          name='email'
        />
        { errors?.email && 
          <ErrorMessage 
            message='This email field is required'
            iconName='warning-outline'
            iconColor='#2E3338'
            iconSize={ 20 }
          /> 
        }

        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, value } }) => (
            <TextInputField 
              iconName='lock-closed-outline'
              iconSize={ 20 }
              iconColor='rgba(0, 0, 0, 0.4)'
              iconStyle={ styles.icon }
              onChange={ onChange } 
              value={ value } 
              placeholder='Password'
              selectionColor='#444C55'
              placeholderTextColor='rgba(0, 0, 0, 0.4)'
              keyboardType='default'
              secureTextEntry
            />
          )}
          name='password'
        />
        { errors?.password && 
          <ErrorMessage 
            message='This password field is required'
            iconName='warning-outline'
            iconColor='#2E3338'
            iconSize={ 20 }
          /> 
        }

        <TouchableOpacity 
          style={ styles.submitButton }
          onPress={ handleSubmit(onSubmit) } 
          activeOpacity={ 0.7 }
        >
          <Text style={ styles.buttonText }> Sign In </Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

// Styles
const styles = StyleSheet.create({
  submitButton: {
    display: 'flex',
    marginTop: 40,
    height: 50,
    backgroundColor: '#2E3338',
    borderRadius: 8
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    height: 50,
    padding: 16,
    alignSelf: 'center'
  },
  container: {
    marginHorizontal: 24
  },
  input: {
    color: '#444C55',
    fontSize: 16
  },
  inputBorder: {
    borderColor: 'red',
    borderWidth: 2,
    borderStyle: 'solid'
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    height: 50,
    padding: 16,
    borderRadius: 8
  },
  icon: {
    width: '10%',
    paddingRight: 16,
    justifyContent: 'center',
    alignSelf: 'center'
  }
});