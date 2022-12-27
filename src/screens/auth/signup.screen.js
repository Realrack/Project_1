import React, {useState} from 'react';
import CreatUser from '../../network/auth';

import {TextInput} from 'react-native-paper';

import BaseView from '../../components/baseView.component';
import {theme} from '../../infrastructure/theme';
import Button from '../../components/button.component';
import Input from '../../components/input.component';
import BackButton from '../../components/backButton.component';
import InputContainer from '../../components/inputContainer.component';
import Text from '../../components/text.component';
import Loader from '../../components/loader.component';

const SignupScreen = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [loading, setLoading] = useState(false);

  const submit = () => {
    if (
      name.trim() === '' ||
      (name == 'null' && email.trim() == '') ||
      (email == 'null' && password.trim() == '') ||
      (password == 'null' && confirmPassword.trim() == '') ||
      confirmPassword == 'null'
    ) {
      alert('enter your data');
    } else {
      CreatUser();
    }
  };

  return (
    <BaseView>
      <Loader loading={loading} />

      <BackButton onPress={() => navigation.goBack()} />

      <InputContainer>
        <Text fw h5 ta={'center'}>
          Enter Details
        </Text>
        <Input
          value={name}
          setValue={text => setName(text)}
          label="Name"
          left={
            <TextInput.Icon
              icon={'account'}
              iconColor={theme.colors.brand.primary}
            />
          }
        />
        <Input
          value={email}
          setValue={text => setEmail(text)}
          label="Email"
          left={
            <TextInput.Icon
              icon={'email'}
              iconColor={theme.colors.brand.primary}
            />
          }
        />
        <Input
          secureTextEntry={passwordVisible}
          right={
            <TextInput.Icon
              icon={passwordVisible ? 'eye' : 'eye-off'}
              onPress={() => setPasswordVisible(!passwordVisible)}
              iconColor={theme.colors.brand.primary}
            />
          }
          value={password}
          setValue={text => setPassword(text)}
          label="Create Password"
          left={
            <TextInput.Icon
              icon={'lock'}
              iconColor={theme.colors.brand.primary}
            />
          }
        />
        <Input
          secureTextEntry={passwordVisible2}
          right={
            <TextInput.Icon
              icon={passwordVisible2 ? 'eye' : 'eye-off'}
              onPress={() => setPasswordVisible2(!passwordVisible2)}
              iconColor={theme.colors.brand.primary}
            />
          }
          value={confirmPassword}
          setValue={text => setConfirmPassword(text)}
          label="Confirm Password"
          left={
            <TextInput.Icon
              icon={'lock'}
              iconColor={theme.colors.brand.primary}
            />
          }
        />
      </InputContainer>
      <Button onPress={submit}>SUBMIT</Button>
    </BaseView>
  );
};
export default SignupScreen;
