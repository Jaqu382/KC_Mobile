import React from 'react';
import { Pressable, Image, StyleSheet } from 'react-native';

const LogoutButton = ({ onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Image source={require('./path/to/logout.png')} style={styles.icon} />
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

export default LogoutButton;