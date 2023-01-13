import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStackScreen from './authStack.navigation';

import MyDrawer from './drawer.navigation';
import Loader from '../components/loader.component';
import Auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();
export default function RootStackScreen() {
  const [user, setUser] = useState();
  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(user) {
    setUser(user);

    if (initializing) {
      setInitializing(false);
    }
  }
  useEffect(() => {
    const subscriber = Auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return <Loader loading={initializing} />;
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!user ? (
        <Stack.Screen name="AuthStack" component={AuthStackScreen} />
      ) : (
        <Stack.Screen name="Drawer" component={MyDrawer} />
      )}
    </Stack.Navigator>
  );
}
