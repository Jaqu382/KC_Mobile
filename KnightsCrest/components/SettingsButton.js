import React from 'react';
import { Pressable, Image, StyleSheet } from 'react-native';

const SettingsButton = ({ onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Image source={require('../assets/images/settomgs')} style={styles.icon} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default SettingsButton;