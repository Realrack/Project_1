import {ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import {theme} from '../infrastructure/theme';
export default function Loader({loading}) {
  return loading ? (
    <ActivityIndicator
      size="large"
      color={theme.colors.brand.primary}
      style={styles.container}
    />
  ) : null;
}
const styles = StyleSheet.create({
  container: {
    width: theme.WIDTH,
    height: theme.HEIGHT,
    position: 'absolute',
    backgroundColor: theme.colors.bg.primary + 90,
    zIndex: 1,
  },
});
