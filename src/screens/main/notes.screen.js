import {StyleSheet} from 'react-native';
import React from 'react';
import BaseView from '../../components/baseView.component';
import Text from '../../components/text.component';

export default function NotesScreen() {
  return (
    <BaseView style={styles.container}>
      <Text color={'#000'} fs={30}>
        This is Notes Screen.
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
