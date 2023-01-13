import React, {useState} from 'react';
import {CreateUser} from '../../network/auth';
import Toast from 'react-native-toast-message';
import {theme} from '../../infrastructure/theme';
import BaseView from '../../components/baseView.component';
import Button from '../../components/button.component';
import Input from '../../components/input.component';
import BackButton from '../../components/backButton.component';
import InputContainer from '../../components/inputContainer.component';
import Text from '../../components/text.component';
import Loader from '../../components/loader.component';
import {createValidation} from '../../validation/auth';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const submit = async () => {
    let data = {email, password, name, phone, confirmPassword};
    let error = createValidation(data);
    if (!error) {
      setLoading(true);
      CreateUser(data)
        .then(res => {
          Toast.show({
            type: 'success',
            text1: 'Create',
            text2: 'your are welcome',
          });
          setLoading(false);
        })
        .catch(error => {
          Toast.show({
            type: 'error',
            text1: 'Create',
            text2: error.message,
          });
          setLoading(false);
        });
    }
  };
  return (
    <BaseView>
      <Loader loading={loading} />
      <BackButton onPress={() => navigation.goBack()} />
      <InputContainer style={{marginTop: theme.space[5]}}>
        <Text fw h5 ta={'center'}>
          Enter Details
        </Text>
        <Input
          value={name}
          setValue={text => setName(text)}
          label="Name"
          isUser
        />
        <Input
          value={email}
          setValue={text => setEmail(text)}
          label="Email"
          isEmail
        />
        <Input
          value={phone}
          setValue={text => setPhone(text)}
          label="Mobile"
          isPhone
        />
        <Input
          isPassword
          value={password}
          setValue={text => setPassword(text)}
          label="Create Password"
        />
        <Input
          isPassword
          value={confirmPassword}
          setValue={text => setConfirmPassword(text)}
          label="Confirm Password"
        />
      </InputContainer>
      <Button onPress={submit}>SUBMIT</Button>
    </BaseView>
  );
};
export default SignupScreen;
