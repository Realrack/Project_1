import React from 'react';
import {StyleSheet} from 'react-native';
import {Button as PaperButton} from 'react-native-paper';
import {theme} from '../infrastructure/theme';

export default function Button({
  icon,
  onPress,
  children,
  color,
  style,
  labelStyle,
  ...rest
}) {
  return (
    <PaperButton
      {...rest}
      icon={icon}
      mode="contained"
      buttonColor={theme.colors.brand.tertiary}
      onPress={onPress}
      style={[styles.button, style]}
      labelStyle={labelStyle}>
      {children}
    </PaperButton>
  );
}
const styles = StyleSheet.create({
  button: {
    width: theme.WIDTH / 1.35,
    height: theme.lineHeights.input,
    justifyContent: 'center',
    marginTop: theme.space[3],
    alignSelf: 'center',
  },
});
