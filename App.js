import React from 'react';
import StackScreen from './src/navigation/stack.navigation';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <>
      <StackScreen />
      <Toast />
    </>
  );
}
