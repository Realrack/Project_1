import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/auth/login.screen';
import SignupScreen from '../screens/auth/signup.screen';
import ForgotScreen from '../screens/auth/forgot.screen';
import {theme} from '../infrastructure/theme';

const Stack = createNativeStackNavigator();

export default function AuthStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarColor: theme.colors.brand.tertiary,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Forgot" component={ForgotScreen} />
    </Stack.Navigator>
  );
}
