import {Image, StyleSheet} from 'react-native';
import React from 'react';
import BaseView from '../../components/baseView.component';
import {images} from '../../utils/images';
export default function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.replace('RootStack');
  }, 3000);
  return (
    <BaseView style={styles.container}>
      <Image style={styles.img} source={images.splash} />
    </BaseView>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 500,
    height: 500,
  },
});
