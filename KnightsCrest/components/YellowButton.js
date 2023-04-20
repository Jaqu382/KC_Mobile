import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { useTheme } from "../ThemeContext";
import { createGlobalStyles } from "../styles/globalStyles";

export default function YellowButton({ title, onPress }) {
  const theme = useTheme();
  const globalStyles = createGlobalStyles(theme);
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={globalStyles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    button: {

        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 3,
        backgroundColor: "#ffc904",
        boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" 
      },

});