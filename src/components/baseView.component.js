import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {theme} from '../infrastructure/theme';

export default function BaseView({children, style}) {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg.primary,
  },
});
