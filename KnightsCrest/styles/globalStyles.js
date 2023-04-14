// globalStyles.js
import { StyleSheet } from 'react-native';

export const createGlobalStyles = (theme) => {
  const { appFontSize, isDarkModeEnabled } = theme;

  const backgroundColor = isDarkModeEnabled ? '#333' : '#fff';
  const internalBackgroundColor = isDarkModeEnabled ? '#DDD': '#fff';
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
    button: {
      width: 250,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderLeftWidth: 5,
      borderStartColor: "#ffc904",
      borderRadius: 2,
      borderColor: "#ffc904",
      elevation: 3,
      backgroundColor: internalBackgroundColor,
      boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
    },
  });
};