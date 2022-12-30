import React, {useState} from 'react';

import {StyleSheet} from 'react-native';
import {theme} from '../infrastructure/theme';
import {TextInput} from 'react-native-paper';

export default function Input({
  placeholder,
  label,
  style,
  value,
  right,
  secureTextEntry,
  setValue,
  isPassword,
  isEmail,
  isPhone,
  isUser,
  ...rest
}) {
  let keyboardType = 'email-address';
  if (label === 'Mobile' || label === 'Paste your Code') {
    keyboardType = 'numeric';
  }

  let left = left;
  if (isPassword) {
    left = (
      <TextInput.Icon icon={'lock'} iconColor={theme.colors.brand.primary} />
    );
  } else if (isEmail) {
    left = (
      <TextInput.Icon icon={'email'} iconColor={theme.colors.brand.primary} />
    );
  } else if (isUser) {
    left = (
      <TextInput.Icon icon={'account'} iconColor={theme.colors.brand.primary} />
    );
  } else if (isPhone) {
    left = (
      <TextInput.Icon icon={'phone'} iconColor={theme.colors.brand.primary} />
    );
  }
  const [passwordVisible, setPasswordVisible] = useState(true);

  return (
    <TextInput
      {...rest}
      theme={{colors: {primary: theme.colors.brand.primary}}}
      textColor={theme.colors.text.primary}
      underlineColor={theme.colors.ui.disabled}
      value={value}
      onChangeText={setValue}
      secureTextEntry={isPassword ? passwordVisible : null}
      label={label}
      left={left}
      placeholder={placeholder}
      right={
        isPassword ? (
          <TextInput.Icon
            icon={passwordVisible ? 'eye' : 'eye-off'}
            iconColor={theme.colors.brand.primary}
            onPress={() => setPasswordVisible(!passwordVisible)}
          />
        ) : (
          right
        )
      }
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
