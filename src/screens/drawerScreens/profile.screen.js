import React, {useEffect, useState} from 'react';
import {View, Image} from 'react-native';
import BaseView from '../../components/baseView.component';
import Text from '../../components/text.component';
import Input from '../../components/input.component';
import InputContainer from '../../components/inputContainer.component';
import BackButton from '../../components/backButton.component';
import {images} from '../../utils/images';
import {GetUser} from '../../network/auth';
import {theme} from '../../infrastructure/theme';

const ProfileScreen = ({navigation}) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      let response = await GetUser();
      setUser(response);
      console.log(response);
    } catch (error) {
      console.log(error, 'Showing Error user Api');
    }
  };
  return (
    <BaseView>
      <BackButton onPress={() => navigation.goBack()} />
      <Image
        style={{width: 150, height: 150, alignSelf: 'center', marginTop: 50}}
        source={images.avatar}
      />

      <InputContainer>
        <Text mb={5} color={theme.colors.text.disabled}>
          Name
        </Text>
        <Text mb={5} color={theme.colors.brand.tertiary}>
          {user?.name}
        </Text>
        <Text mb={5} color={theme.colors.text.disabled}>
          Email
        </Text>
        <Text mb={5} color={theme.colors.brand.tertiary}>
          {user?.email}
        </Text>
        <Text mb={5} color={theme.colors.text.disabled}>
          Mobile
        </Text>
        <Text mb={5} color={theme.colors.brand.tertiary}>
          {user?.phone}
        </Text>
      </InputContainer>
    </BaseView>
  );
};

export default ProfileScreen;
