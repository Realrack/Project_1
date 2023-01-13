import {View, StyleSheet} from 'react-native';
import React from 'react';
import BaseView from '../../components/baseView.component';
import Text from '../../components/text.component';

export default function Testscreen() {
  return (
    <BaseView style={styles.container}>
      <Text fs={30} color={'#000'}>
        This is Test Screen.
      </Text>
    </BaseView>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
