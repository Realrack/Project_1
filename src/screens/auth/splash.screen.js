import {Image} from 'react-native';
import React from 'react';
import BaseView from '../../components/baseView.component';
export default function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.replace('RootStack');
  }, 3000);
  return (
    <BaseView style={{alignItems: 'center', justifyContent: 'center'}}>
      <Image
        style={{width: 500, height: 500}}
        source={require('../../utils/image/ica.png')}
      />
    </BaseView>
  );
}
