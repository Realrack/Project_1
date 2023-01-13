import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../../components/text.component';
import BaseView from '../../components/baseView.component';
import BackButton from '../../components/backButton.component';
import {theme} from '../../infrastructure/theme';

const AboutScreen = ({navigation}) => {
  return (
    <BaseView style={styles.container}>
      <BackButton onPress={() => navigation.goBack()} />
      <Text fs={30} style={{padding: 15}} color={theme.colors.brand.tertiary}>
        About Us
      </Text>
      <Text mt={30} style={{fontFamily: 'cursive', padding: 15}} fs={20}>
        We have the largest young population in India and our youth is also very
        talented but they just need a proper guidance to unleash their full
        potential. So, we are committed to provide them step by step career
        guidance with step by step action plan & hand-holding lifetime support.
        First of all, we have made online courses free for students to develop
        their futuristic technology skills from the comfort of their home. If
        they do not have resources like laptop or internet to study, we are
        setting up our offline academies in India to provide all required
        resources at one place for quality education in their locality at very
        affordable cost of INR 2999 Per Month only. For job seekers & young
        entrepreneurs, we have corporate training with job guarantee.
      </Text>
    </BaseView>
  );
};

export default AboutScreen;
const styles = StyleSheet.create({
  container: {},
});
