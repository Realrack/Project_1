import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {theme} from '../../infrastructure/theme/index';
import {images} from '../../utils/images';
import BackButton from '../../components/backButton.component';

const NotificationsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ImageBackground
        style={{
          width: '100%',
          height: '100%',
          flex: 1,
          paddingTop: 10,
          marginBottom: -10,
        }}
        source={images.notify}>
        <BackButton onPress={() => navigation.goBack()} />

        <Text
          style={{
            fontSize: 30,
            color: 'grey',
            fontWeight: 'bold',
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>
          Notifications
        </Text>
      </ImageBackground>
    </View>
  );
};

export default NotificationsScreen;
