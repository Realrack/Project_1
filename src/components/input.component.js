import React from 'react';

import {StyleSheet} from 'react-native';
import {theme} from '../infrastructure/theme';
import {TextInput} from 'react-native-paper';

export default function Input({
  placeholder,
  label,
  email,
  phone,
  style,
  value,
  right,
  secureTextEntry,
  setValue,
  ...rest
}) {
  let keyboardType = 'email-address';
  if (label === 'Mobile' || label === 'Paste your Code') {
    keyboardType = 'numeric';
  }

  return (
    <TextInput
      {...rest}
      theme={{colors: {primary: theme.colors.brand.primary}}}
      textColor={theme.colors.text.primary}
      underlineColor={theme.colors.ui.disabled}
      value={value}
      onChangeText={setValue}
      secureTextEntry={secureTextEntry}
      label={label}
      placeholder={placeholder}
      keyboardType={keyboardType}
      right={right}
      style={[styles.input, style]}
    />
  );
}
const styles = StyleSheet.create({
  input: {
    width: theme.WIDTH / 1.35,
    marginBottom: theme.space[3],
    fontSize: theme.fontSizes.body,
    paddingLeft: theme.space[2],
    fontFamily: 'serif',
    backgroundColor: theme.colors.bg.primary,
    borderRadius: theme.space[3],
  },
});
