import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CentresScreen from '../screens/main/centres.screen';
import HomeScreen from '../screens/main/home.screen';
import BatchesScreen from '../screens/main/batches.screen';
import BooksScreen from '../screens/main/books.screen';
import Testscreen from '../screens/main/test.screen';
import NotesScreen from '../screens/main/notes.screen';
import AppDevelopment from '../screens/courses/app.screen';
import GameDevelopment from '../screens/courses/game.screen';
import EthicalHacking from '../screens/courses/ethical.screen';
import WebDevelopment from '../screens/courses/web.screen';
import NotificationsScreen from '../screens/main/notifications.screen';

const Stack = createNativeStackNavigator();

export default function MainStackScreen() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Centres" component={CentresScreen} />
      <Stack.Screen name="Batches" component={BatchesScreen} />
      <Stack.Screen name="Books" component={BooksScreen} />
      <Stack.Screen name="Test" component={Testscreen} />
      <Stack.Screen name="Notes" component={NotesScreen} />
      <Stack.Screen name="AppDev" component={AppDevelopment} />
      <Stack.Screen name="WebDev" component={WebDevelopment} />
      <Stack.Screen name="Ethcking" component={EthicalHacking} />
      <Stack.Screen name="Game" component={GameDevelopment} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
    </Stack.Navigator>
  );
}
