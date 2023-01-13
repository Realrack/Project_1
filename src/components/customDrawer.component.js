import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Share,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {images} from '../utils/images';
import {GetUser} from '../network/auth';
import BaseView from '../components/baseView.component';
import auth from '@react-native-firebase/auth';

const CustomDrawer = props => {
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
  const navigation = useNavigation();

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'https://play.google.com/store/apps/details?id=com.indiancodingacademy&hl=en_IN&gl=US',
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => {})
      .catch(error => alert(error.message));
  };

  return (
    <BaseView style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View>
          <ImageBackground
            source={images.back}
            style={{padding: 15, marginTop: -5}}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Image
                  source={images.avatar}
                  style={{width: 100, height: 100, borderRadius: 50}}
                />
                <Text
                  style={{
                    fontSize: 20,
                    color: '#fff',
                    fontWeight: 'bold',
                    alignSelf: 'center',
                  }}>
                  Hello, {user?.name}
                </Text>
              </View>
              <View style={{marginHorizontal: 100, marginVertical: 5}}>
                <FontAwesome5
                  onPress={() => navigation.navigate('Profile')}
                  name="edit"
                  size={22}
                  color={'#fff'}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 20}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#f0f5f5'}}>
        <TouchableOpacity onPress={onShare}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons color={'#0096FF'} name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginHorizontal: 8,
                fontWeight: 'bold',
                color: '#0096FF',
              }}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignOut} style={{marginTop: 10}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons color={'red'} name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginHorizontal: 8,
                fontWeight: 'bold',
                color: 'red',
              }}>
              SignOut
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </BaseView>
  );
};

export default CustomDrawer;
