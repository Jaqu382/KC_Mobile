// globalStyles.js
import { StyleSheet } from 'react-native';

export const createGlobalStyles = (theme) => {
  const { appFontSize, isDarkModeEnabled } = theme;
  const backgroundColor = isDarkModeEnabled ? '#333' : '#fff';
  const accentBackground = isDarkModeEnabled ? '#FDF1BC' : '#333'
  const cardBackgroundColor = isDarkModeEnabled ? '#fff' : '#FDF1BC';
  const titleTextColor = isDarkModeEnabled ? '#fff' : '#333';
  const buttonColor = isDarkModeEnabled ? '#fff' : '#333';
  const textColor = isDarkModeEnabled ? '#fff' : '#333';
  const dividerColor = isDarkModeEnabled ? '#fff': '#333'

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      width: 25,
      height: 25,},
    text: {
      fontSize: appFontSize,
      fontFamily: 'GothamMedium',
      color: '#333'
    },
    smallText: {
      color: textColor,
      fontSize: appFontSize - 2
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
      borderWidth: 3,
      borderColor: accentBackground,
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
      borderWidth: 3,
      borderColor: accentBackground,
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
    subheadingText: {
      fontSize: 18,
      fontFamily: 'GothamBold',
      color: textColor,
      marginBottom: 5
    },
    userName: {
      fontSize: appFontSize,
      color: textColor,
    },
    title: {
      fontFamily: 'GothamBold',
      fontSize: appFontSize,
      color: 'black',
    },
    subtitle: {
      fontFamily: 'GothamBold',
      fontSize: appFontSize - 4,
      color: 'black',
    },
    logo: {
      width: 50,
      height: 50,
    },
    divider: {
      marginTop: 10,
      marginBottom: 10,
      borderBottomWidth: 2,
      borderBottomColor: dividerColor,
    },
    profilePic: {
      width: 80,
      height: 80,
      borderRadius: 10,
      marginRight: 20,
    },
    userProps: {
      fontSize: appFontSize - 4,
      marginBottom: 2,
      color: 'black',
      fontFamily: 'GothamBook',
    },
    caste: {
      fontFamily: 'GothamBold',
      fontSize: appFontSize,
      marginBottom: 2,
      color: 'black',

    },
    nameAndCaste: {
      flex: 1,
      fontFamily: 'GothamBold',
    },
    details: {
      backgroundColor: '#fff',
      borderWidth: 3,
      borderRadius: 10,
      padding: 15,
      borderWidth: 3,
      borderColor: accentBackground,
      
    },
    detailItem: {
      flexDirection: "row",
      marginBottom: 5,
    },
    cardContent: {
      backgroundColor: '#fff',
      borderRadius: 0,
      padding: 5,
      borderWidth: 3,
      borderRadius: 10,
      marginBottom: 10,
      borderColor: accentBackground,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    IDcard: {
      backgroundColor: "#FFC904",
      borderWidth: 3,
      borderColor: accentBackground,
      width: 325,
      height: 355,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  });
};