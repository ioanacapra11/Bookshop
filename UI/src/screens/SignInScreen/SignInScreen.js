import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignInScreen = () => {
  const {username, setUsername} = useState('');
  const {password, setPassword} = useState('');
  const onSignInPressed = () => {
    console.warn('Sign in');
  };
  const onCreateAccount = () => {
    console.warn('Create account');
  };

  return (
    <View style={styles.root}>
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      <CustomButton text="Sign In" onPress={onSignInPressed} />
      <CustomButton text="Create account" onPress={onCreateAccount} />
    </View>
  );
};

const styles = StyleSheet.create({root: {alignItems: 'center', padding: 20}});

export default SignInScreen;
