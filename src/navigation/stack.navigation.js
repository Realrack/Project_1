import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {theme} from '../infrastructure/theme';
import SplashScreen from '../screens/auth/splash.screen';
import RootStackScreen from './rootStack.navigation';

const Stack = createNativeStackNavigator();

function StackScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          statusBarColor: theme.colors.brand.tertiary,
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="RootStack" component={RootStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default StackScreen;
