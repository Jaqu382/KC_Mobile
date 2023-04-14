import { View, Text , StyleSheet, Pressable, SafeAreaView } from "react-native";
import React, { useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Image } from 'react-native';

// Theme and styles
import { useTheme } from '../../ThemeContext';
import { createGlobalStyles } from '../../styles/globalStyles';

// Darkmode logo
import knightsCashLogoDark from '../../assets/images/knightsCashLogoWhite.png';


export default function KnightsCashMain({navigation}){

  const theme = useTheme();
  const globalStyles = createGlobalStyles(theme);
  const { isDarkModeEnabled } = useTheme();

  useFocusEffect(
    React.useCallback(() => {
      // Reset the nested stack navigator when the tab is focused
      const unsubscribe = navigation.addListener('tabPress', (e) => {
        e.preventDefault(); // Prevent the default behavior
        navigation.navigate('Knights Cash Menu'); // Navigate to the first screen of the nested stack navigator
      });

      return unsubscribe;
    }, [navigation])
  );

  return( 
    <SafeAreaView style={globalStyles.container}>
      <Image source={isDarkModeEnabled ? knightsCashLogoDark: require('../../assets/images/knightsCashLogo.png')
  }
  style={{ width: 350, height: 130 }}
/>
      <View>    
        <View style={{paddingTop: 10}}>
          <Pressable style={globalStyles.button} onPress={() => navigation.navigate("Balance")}>
            <Text style = {globalStyles.text}>Check Balance</Text>
          </Pressable>
        </View>
        <View style={{paddingTop: 10}}>
          <Pressable style={globalStyles.button} onPress={() => navigation.navigate("Add")}>
            <Text style = {globalStyles.text}>Add funds</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
