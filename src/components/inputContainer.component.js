import React from 'react';
import {View, StyleSheet} from 'react-native';
import {theme} from '../infrastructure/theme';

export default function InputContainer({children, style}) {
  return <View style={[styles.inputContainer, style]}>{children}</View>;
}
const styles = StyleSheet.create({
  inputContainer: {
    margin: theme.space[3],
    padding: theme.space[3],
    borderColor: theme.colors.ui.disabled,
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: theme.colors.bg.primary,
  },
});
