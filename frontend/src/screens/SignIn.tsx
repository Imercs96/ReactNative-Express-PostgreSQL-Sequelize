import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text } from 'react-native';

import ArtDecoBackground from '../assets/images/art-deco-background.png';
import { BackgroundGradient } from '../components/BackgroundGradient';
import { Form } from '../components/SignIn/Form';
import { UserSignInValues } from '../interfaces/user';

// Form Initial Values
const initialValues: UserSignInValues = 
  { email: '', password: '', username: '' };

export const SignIn = () => {

  return (
    <KeyboardAvoidingView
      behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
      style={ styles.conatiner }
    >
      <BackgroundGradient source={ ArtDecoBackground }/>
      <ScrollView>
        <Text style={ styles.splashText }> Splash </Text>
        <Text style={ styles.artDecoText }> design </Text>
        <Form { ...initialValues }/>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1
  },
  splashText: {
    fontFamily: 'PlayfairDisplay-Bold',
    fontSize: 70.5,
    lineHeight: 94,
    color: '#444C55',
    letterSpacing: -0.04,
    marginTop: '40%',
    display: 'flex',
    alignSelf: 'center'
  },
  artDecoText: {
    fontFamily: 'DancingScript-Regular',
    fontSize: 70.5,
    lineHeight: 85,
    color: '#B88B47',
    letterSpacing: -0.04,
    marginTop: -40,
    marginLeft: 50,
    display: 'flex',
    alignSelf: 'center'
  }
});