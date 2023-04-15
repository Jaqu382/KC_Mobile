// globalStyles.js
import { StyleSheet } from 'react-native';

export const createGlobalStyles = (theme) => {
  const { appFontSize, isDarkModeEnabled } = theme;

  const backgroundColor = isDarkModeEnabled ? '#333' : '#fff';
  const cardBackgroundColor = isDarkModeEnabled ? '#fff' : '#FDF1BC';
  const titleTextColor = isDarkModeEnabled ? '#fff' : '#333';
  const buttonColor = isDarkModeEnabled ? '#fff' : '#333';
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
      fontFamily: 'GothamMedium',
      color: '#333'
    },
    bodyText: {
      fontSize: appFontSize,
      fontFamily: 'GothamBook',
      color: '#333'
    },
    suspendedText: {
      fontSize: appFontSize + 2,
      fontFamily: 'GothamBold',
      color: textColor,
      textAlign: 'center',
      marginBottom: 20,
    },
    titleText:{
      fontSize: appFontSize + 4,
      fontFamily: 'GothamBold',
      color: titleTextColor,
      marginBottom: 20,
    },
    button: {
      width: appFontSize * 15,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderLeftWidth: 5,
      borderStartColor: "#ffc904",
      borderRadius: 2,
      borderColor: "#ffc904",
      elevation: 3,
      backgroundColor: "#fff",
      boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
    },
    alternateButton: {
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      elevation: 3,
      backgroundColor: "#ffc904",
      boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" 
    },
    card: {
      padding: 15,
      backgroundColor: cardBackgroundColor,
      fontFamily: "GothamBook",
      borderRadius: 5,
      marginBottom: 10,
      boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
    },
    reqItem: {
      width: 300,
      height: 50,
      backgroundColor: "#FDF1BC",
      shadowColor: "#000000",
      boxShadow:
        "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
    },
    addForm: {
      padding: 15,
      backgroundColor: cardBackgroundColor,
      borderRadius: 5,
      marginBottom: 10,
      width: 320,
      boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
    },

    amountButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },

    amountButton: {
      width: appFontSize * 3,
      padding: 10,
      elevation: 3,
      borderWidth: 1,
      borderColor: buttonColor,
      backgroundColor: backgroundColor,
      borderRadius: 5,
      alignItems: 'center',
    },

    amountButtonSelected: {
      width: appFontSize * 3,
      padding: 10,
      elevation: 3,
      borderWidth: 1,
      borderColor: '#33b249',
      backgroundColor: '#33b249',
      borderRadius: 5,
      alignItems: 'center',
    },
    amountButtonText: {
      fontSize: appFontSize,
      color: buttonColor,
    },
    fieldInput: {
      padding: 10,
      borderWidth: 1,
      borderColor: '#333',
      elevation: 3,
      borderRadius: 5,
      backgroundColor: '#fff',
      fontSize: appFontSize,
      boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
    },
    fieldTitle: {
      fontFamily: 'GothamBold',
      fontSize: appFontSize,
    },
    fieldInputFocus: {
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#fff',
      fontSize: 15,
      color: "#000",
      boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
    },
    warningText: {
      color: "red"
    },
  });
};