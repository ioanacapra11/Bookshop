import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import axios from 'axios';

const url = 'http://localhost:8080';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSignInPressed = () => {
    console.warn('Sign in');
    axios
      .post(`http://10.0.2.2:8080/signin`, {email, password})
      .then(res => console.log(JSON.stringify(res.data)))
      .catch(err => console.log('err: ' + err));
  };

  const onCreateAccount = () => {
    console.warn('Create account');
  };

  return (
    <View style={styles.root}>
      <CustomInput placeholder="email" value={email} setValue={setEmail} />
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
