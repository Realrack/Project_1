import React, {useState} from 'react';

import {TextInput} from 'react-native-paper';
import {theme} from '../../infrastructure/theme';

import BaseView from '../../components/baseView.component';
import Button from '../../components/button.component';
import Input from '../../components/input.component';
import BackButton from '../../components/backButton.component';
import Text from '../../components/text.component';
import InputContainer from '../../components/inputContainer.component';
import Toast from 'react-native-toast-message';

export default function ForgotScreen({navigation}) {
  const [emailid, setEmailid] = useState();

  const submit = () => {
    if (emailid.trim() === '' || emailid === null) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please enter your Email',
      });
    }
  };

  return (
    <BaseView>
      <BackButton onPress={() => navigation.goBack()} />
      <Text title fw ta={'center'}>
        Enter Your Email-Id
      </Text>
      <InputContainer>
        <Input
          value={emailid}
          setValue={text => setEmailid(text)}
          label="Email"
          isEmail
        />
      </InputContainer>
      <Button onPress={submit}>SUBMIT</Button>
    </BaseView>
  );
}
