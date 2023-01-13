import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../components/customDrawer.component';
import SettingsScreen from '../screens/drawerScreens/settings.screen';
import AboutScreen from '../screens/drawerScreens/aboutUs.screen';
import ProfileScreen from '../screens/drawerScreens/profile.screen';
import MomentsScreen from '../screens/drawerScreens/moments.screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {theme} from '../infrastructure/theme/index';
import BottomTabNavigation from '../navigation/bottomTabs.navigation';

const Drawer = createDrawerNavigator();
const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: theme.colors.brand.tertiary,
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,

          fontSize: 15,
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name={'home-outline'} color={color} size={22} />
          ),
        }}
        name="BottomTab"
        component={BottomTabNavigation}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name={'person-outline'} color={color} size={22} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <Fontisto name={'persons'} color={color} size={22} />
          ),
        }}
        name="About Us"
        component={AboutScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name={'call-outline'} color={color} size={22} />
          ),
        }}
        name="Contacts"
        component={MomentsScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name={'settings-outline'} color={color} size={22} />
          ),
        }}
        name="Setting"
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
export default MyDrawer;
