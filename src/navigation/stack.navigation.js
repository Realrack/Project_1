import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OtpScreen from '../screens/auth/otp.screen';
import LoginScreen from '../screens/auth/login.screen';
import SignupScreen from '../screens/auth/signup.screen';
import ForgotScreen from '../screens/auth/forgot.screen';
import {theme} from '../infrastructure/theme';
import LoaderComponent from '../components/loader.component';

const StackScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="OTP"
          screenOptions={{
            headerShown: false,
            statusBarColor: theme.colors.brand.tertiary,
          }}>
          <Stack.Screen name="OTP" component={OtpScreen} />
          <Stack.Screen
            options={{statusBarColor: '#fff'}}
            name="Loader"
            component={LoaderComponent}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Forgot" component={ForgotScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default StackScreen;
