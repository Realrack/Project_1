import {Text as TextRN, StyleSheet} from 'react-native';
import React from 'react';
import {theme} from '../infrastructure/theme';
export default function Text({
  children,
  style,
  color,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  mt,
  fs,
  subtitle,
  title,
  caption,
  button,
  body,
  ml,
  mb,
  mr,
  fw,
  ta,
  ...rest
}) {
  return (
    <TextRN
      {...rest}
      style={StyleSheet.flatten([
        StyleSheet.flatten([styles.text, style]),

        color && StyleSheet.flatten([styles.color(color), style]),
        mt && StyleSheet.flatten([styles.mt(mt), style]),
        ml && StyleSheet.flatten([styles.ml(ml), style]),
        mb && StyleSheet.flatten([styles.mb(mb), style]),
        mr && StyleSheet.flatten([styles.mr(mr), style]),
        fs && StyleSheet.flatten([styles.fs(fs), style]),
        ta && StyleSheet.flatten([styles.ta(ta), style]),

        caption && StyleSheet.flatten([styles.caption, style]), //12
        button && StyleSheet.flatten([styles.button, style]), //14
        body && StyleSheet.flatten([styles.body, style]), //16
        subtitle && StyleSheet.flatten([styles.subtitle, style]), //18
        title && StyleSheet.flatten([styles.title, style]), //20
        fw && StyleSheet.flatten([styles.fw, style]), //bold
        h1 && StyleSheet.flatten([styles.h1, style]), //112
        h2 && StyleSheet.flatten([styles.h2, style]), //56
        h3 && StyleSheet.flatten([styles.h3, style]), //45
        h4 && StyleSheet.flatten([styles.h4, style]), //34
        h5 && StyleSheet.flatten([styles.h5, style]), //24
      ])}>
      {children}
    </TextRN>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.text.primary,
  },
  color: color => ({
    color,
  }),
  mt: mt => ({
    marginTop: mt,
  }),
  mb: mb => ({
    marginBottom: mb,
  }),
  mr: mr => ({
    marginRight: mr,
  }),
  ml: ml => ({
    marginLeft: ml,
  }),
  fs: fs => ({
    fontSize: fs,
  }),
  ta: ta => ({
    textAlign: ta,
  }),
  fw: {
    fontWeight: theme.fontWeights.bold,
  },
  caption: {
    fontSize: theme.fontSizes.caption,
  },
  button: {
    fontSize: theme.fontSizes.button,
  },
  body: {
    fontSize: theme.fontSizes.body,
  },
  h1: {
    fontSize: theme.fontSizes.h1,
  },
  subtitle: {
    fontSize: theme.fontSizes.subtitle,
  },
  title: {
    fontSize: theme.fontSizes.title,
  },
  h2: {
    fontSize: theme.fontSizes.h2,
  },
  h3: {
    fontSize: theme.fontSizes.h3,
  },
  h4: {
    fontSize: theme.fontSizes.h4,
  },
  h5: {
    fontSize: theme.fontSizes.h5,
  },
});
