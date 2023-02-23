import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

import ArtDecoBackground from '../assets/images/art-deco-background.png';
import { BackgroundGradient } from '../components/Background';

const Form = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: ''
    }
  });
  const onSubmit = (data: any) => console.log(data);

  console.log({ errors });

  return (
    <View>
      <Text style={styles.label}>Username</Text>
      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      {errors.firstName && <Text>This is required.</Text>}
      <Text style={styles.label}>Email</Text>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
          required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export const Login = () => {
  return (
    <>
      <BackgroundGradient source={ ArtDecoBackground }/>
      <Text style={ styles.splashText }> Splash </Text>
      <Text style={ styles.artDecoText }> design </Text>
      <Form/>
    </>
  );
};

const styles = StyleSheet.create({
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
  },
  label: {
    color: 'black',
    margin: 20,
    marginLeft: 0
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    padding: 8,
    backgroundColor: '#0e101c'
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4
  }
});