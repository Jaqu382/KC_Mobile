import React from 'react';
import { Pressable, Image, StyleSheet, View } from 'react-native';

const SettingsButton = ({ onPress }) => {
  return (
    <View style = {styles.wrapper}>
      <Pressable onPress={onPress} style={styles.button}>
        <Image source={require('../assets/images/settingsIcon.png')} style={styles.icon} />
      </Pressable>
    </View>
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
  wrapper: {
    flexDirection: 'row',
  },
});

export default SettingsButton;