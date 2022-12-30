import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import BaseView from '../../components/baseView.component';
import {theme} from '../../infrastructure/theme';
import Input from '../../components/input.component';
import Button from '../../components/button.component';
import InputContainer from '../../components/inputContainer.component';
import Text from '../../components/text.component';
import Loader from '../../components/loader.component';
import {SignInUser} from '../../network/auth';
import Toast from 'react-native-toast-message';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState(__DEV__ ? 'ashish@gmail.com' : '');
  const [password, setPassword] = useState(__DEV__ ? '123456789' : '');
  const [loading, setLoading] = useState(false);

  const login = () => {
    if (
      (email == '' &&
        password == '' &&
        (email.trim() == '' || email == 'null') &&
        password.trim() == '') ||
      password == 'null'
    ) {
      Toast.show({
        type: 'error',
        text1: 'login',
        text2: 'Plz Enter Data👋',
      });
    } else {
      setLoading(true);
      SignInUser(email, password)
        .then(() => {
          setLoading(false);
          navigation.navigate('OTP');
        })
        .catch(error => {
          setLoading(false);
          alert(error);
        });
    }
  };

  return (
    <BaseView>
      <Loader loading={loading} />
      <Text mt={theme.space[6]} ta={'center'} mb={theme.space[1]} fw title>
        Enter your Email-Id & Password
      </Text>
      <InputContainer>
        <Input
          value={email}
          setValue={text => setEmail(text)}
          label="Email"
          isEmail
        />
        <Input
          value={password}
          setValue={text => setPassword(text)}
          label="Password"
          isPassword
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Forgot')}
          style={styles.forgot}>
          <Text subtitle color={theme.colors.brand.secondary}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </InputContainer>

      <Button style={styles.touch} onPress={login}>
        Login
      </Button>

      <TouchableOpacity
        onPress={() => navigation.navigate('Signup')}
        style={styles.signup}>
        <Text mt={theme.space[3]} subtitle>
          New user?
        </Text>
        <Text mt={theme.space[3]} subtitle color={theme.colors.brand.secondary}>
          {' '}
          Sign up
        </Text>
      </TouchableOpacity>
    </BaseView>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  forgot: {
    marginTop: theme.space[3],
    alignItems: 'flex-end',
  },
  signup: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
