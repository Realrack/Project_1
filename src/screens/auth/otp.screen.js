import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import Toast from 'react-native-toast-message';

import BaseView from '../../components/baseView.component';
import {theme} from '../../infrastructure/theme';
import Button from '../../components/button.component';
import Input from '../../components/input.component';
import InputContainer from '../../components/inputContainer.component';
import Text from '../../components/text.component';

const OtpScreen = ({navigation}) => {
  const [selected, setSelection] = React.useState(false);
  const [number, setNumber] = React.useState('');
  const [code, setCode] = React.useState('');

  const submit = () => {
    if (number.trim() === '' || number === null || number.length < 10) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please enter valid Mobile Number',
      });
    } else {
      Toast.show({
        type: 'success',
        text1: 'Hello',
        text2: 'Welcome To ICA 👋',
      });
    }
  };
  return (
    <BaseView>
      <Text mt={theme.space[6]} mb={theme.space[1]} fw title ta={'center'}>
        Enter your Mobile no.
      </Text>
      <InputContainer>
        <Input
          value={number}
          setValue={text => setNumber(text)}
          label="Mobile"
          isPhone
        />

        <View style={styles.checkTextContiner}>
          <CheckBox
            value={selected}
            onValueChange={() => setSelection(!selected)}
            tintColors={{
              true: theme.colors.brand.primary,
              false: theme.colors.brand.primary,
            }}
          />
          <Text ml={theme.space[1]} color={theme.colors.text.disabled}>
            I have a referral code.
          </Text>
        </View>
        <View>
          {selected ? (
            <Input
              value={code}
              setValue={text => setCode(text)}
              height={selected ? 'auto' : '0'}
              maxLength={7}
              label="Paste your Code"
            />
          ) : null}
        </View>
      </InputContainer>
      <Button style={styles.touch} onPress={submit}>
        SEND OTP
      </Button>
      <View style={styles.loginContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.login}>
          <Text subtitle>Already have an account?</Text>
          <Text subtitle color={theme.colors.brand.primary}>
            {' '}
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </BaseView>
  );
};
export default OtpScreen;

const styles = StyleSheet.create({
  checkTextContiner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  login: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginContainer: {
    marginTop: '10%',
  },
});
