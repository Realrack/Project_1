import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {images} from '../../utils/images';
import Loader from '../../components/loader.component';
import BaseView from '../../components/baseView.component';
import BackButton from '../../components/backButton.component';

const DemoScreen = ({navigation}) => {
  <Loader loading={true} />;
  return (
    <BaseView style={styles.container}>
      <BackButton onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Let's Study</Text>
        </View>
        <View style={styles.courseContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('WebDev')}
            style={styles.touchable}>
            <ImageBackground
              imageStyle={{borderRadius: 15}}
              source={images.webdev}
              style={styles.coursesbg}></ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('AppDev')}
            style={styles.touchable}>
            <ImageBackground
              imageStyle={{borderRadius: 15}}
              source={images.appdev}
              style={styles.coursesbg}></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Ethcking')}
            style={styles.touchable}>
            <ImageBackground
              imageStyle={{borderRadius: 15}}
              source={images.ethcking}
              style={styles.coursesbg}></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Game')}
            style={styles.touchable}>
            <ImageBackground
              imageStyle={{borderRadius: 15}}
              source={images.gamedev}
              style={styles.coursesbg}></ImageBackground>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </BaseView>
  );
};

export default DemoScreen;

const styles = StyleSheet.create({
  textContainer: {},
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 15,
  },
  courseContainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coursesbg: {
    flex: 1,
    width: 360,
    height: 200,
    justifyContent: 'flex-end',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#fff',
  },
  touchable: {
    width: 360,
    height: 200,
    marginBottom: 20,
  },
});
