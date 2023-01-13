import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Text from '../../components/text.component';
import {theme} from '../../infrastructure/theme';
import React, {useEffect, useState} from 'react';
import BaseView from '../../components/baseView.component';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import auth from '@react-native-firebase/auth';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import {images} from '../../utils/images';
import {GetUser} from '../../network/auth';

export default function HomeScreen({navigation}) {
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

  console.log(auth().currentUser);
  return (
    <BaseView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          onPress={() => navigation.openDrawer()}
          name={'notes'}
          size={30}
          color={theme.colors.brand.primary}
        />
        <Image style={styles.centerImage} source={images.splash} />
        <Entypo
          onPress={() => navigation.navigate('Notifications')}
          name={'notification'}
          size={30}
          color={theme.colors.brand.primary}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text color={theme.colors.brand.tertiary} fw subtitle>
          Hello, {user?.name}
        </Text>
        <Swiper style={styles.swiper} autoplay>
          <Image source={images.ad1} style={styles.swipedImage} />
          <Image source={images.ad2} style={styles.swipedImage} />
          <Image source={images.ad3} style={styles.swipedImage} />
          <Image source={images.ad4} style={styles.swipedImage} />
          <Image source={images.ad5} style={styles.swipedImage} />
          <Image source={images.ad7} style={styles.swipedImage} />
          <Image source={images.ad8} style={styles.swipedImage} />
        </Swiper>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Demo')}
            style={styles.scrollhorz}>
            <Text style={styles.horztext}>All Free Courses</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('WebDev')}
            style={styles.scrollhorz}>
            <Text style={styles.horztext}>Web-Development</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('AppDev')}
            style={styles.scrollhorz}>
            <Text style={styles.horztext}>App Development</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Game')}
            style={styles.scrollhorz}>
            <Text style={styles.horztext}>Game Development</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Ethcking')}
            style={styles.scrollhorz}>
            <Text style={styles.horztext}>Ethical Hacking</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={{marginTop: 10}}>
          <Text style={{fontSize: theme.fontSizes.title, fontWeight: '699'}}>
            Explore ICA to learn effectively!
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <View style={styles.lastContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Batches')}
              style={styles.lastTouch}>
              <MaterialCommunityIcons name="library" size={30} color={'#fff'} />
              <Text style={styles.lastText}>Batches</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Demo')}
              style={styles.lastTouch}>
              <Ionicons name="play" size={30} color={'#fff'} />
              <Text style={styles.lastText}>Demo</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.lastContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Centres')}
              style={styles.lastTouch}>
              <FontAwesome name="institution" size={30} color={'#fff'} />
              <Text style={styles.lastText}>Centres</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Books')}
              style={styles.lastTouch}>
              <FontAwesome name="book" size={30} color={'#fff'} />
              <Text style={styles.lastText}>Books</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.lastContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Test')}
              style={styles.lastTouch}>
              <MaterialCommunityIcons
                name="file-certificate"
                size={30}
                color={'#fff'}
              />
              <Text style={styles.lastText}>Test Series</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Notes')}
              style={styles.lastTouch}>
              <Foundation name="clipboard-notes" size={30} color={'#fff'} />
              <Text style={styles.lastText}>Notes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </BaseView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  centerImage: {
    width: 120,
    height: 100,
    marginTop: -theme.space[4],
  },
  swiper: {
    height: 250,
    marginTop: '5%',
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  swipedImage: {
    alignSelf: 'center',
    height: 200,
    width: theme.WIDTH / 1.1,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#f0f5f5',
  },
  scrollhorz: {
    padding: 8,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    backgroundColor: theme.colors.brand.tertiary,
    borderWidth: 1,
    borderColor: '#f0f5f5',
  },
  horztext: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  lastContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  lastTouch: {
    width: 160,
    borderWidth: 1,
    height: 50,
    borderRadius: 15,
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.brand.tertiary,
    borderColor: '#f0f5f5',
  },
  lastText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});
