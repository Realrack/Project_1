import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/main/home.screen';
import {theme} from '../infrastructure/theme';
import CartScreen from '../screens/bottomTabScreens/cart.screen';
import FavouriteScreen from '../screens/bottomTabScreens/favourite.screen';
import DemoScreen from '../screens/bottomTabScreens/demo.screen';
import MainStackScreen from './mainStack.navigation';
const Tab = createBottomTabNavigator();

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {backgroundColor: theme.colors.brand.tertiary},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: 'yellow',
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
        name="MainStack"
        component={MainStackScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="play-outline" color={color} size={size} />
          ),
        }}
        name="Demo"
        component={DemoScreen}
      />
      <Tab.Screen
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: {backgroundColor: 'yellow'},
          tabBarIcon: ({color, size}) => (
            <Feather name="shopping-bag" color={color} size={size} />
          ),
        }}
        name="Cart"
        component={CartScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
        }}
        name="Favourite"
        component={FavouriteScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
