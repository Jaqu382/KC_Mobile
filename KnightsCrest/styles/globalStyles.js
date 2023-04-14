// globalStyles.js
import { StyleSheet } from 'react-native';

export const createGlobalStyles = (theme) => {
  const { appFontSize, isDarkModeEnabled } = theme;

  const backgroundColor = isDarkModeEnabled ? '#333' : '#fff';
  const textColor = isDarkModeEnabled ? '#fff' : '#333';

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: appFontSize,
      color: textColor,
    },
  });
};