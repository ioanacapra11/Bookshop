import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const url = 'http://localhost:8080';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const onSignUpPressed = () => {
    console.warn('Sign up');
    axios
      .post(`http://10.0.2.2:8080/signup`, {email, password})
      .then(res => console.log(JSON.stringify(res.data)))
      .catch(err => console.log('err: ' + err));
  };

  const onSignUpIntoAccount = () => {
    console.warn('Sign up into your account');
    navigation.navigate('SignIn');
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
      <CustomButton text="Sign Up" onPress={onSignUpPressed} />
      <CustomButton
        text="Sign up into your account"
        onPress={onSignUpIntoAccount}
      />
    </View>
  );
};

const styles = StyleSheet.create({root: {alignItems: 'center', padding: 20}});

export default SignUpScreen;
