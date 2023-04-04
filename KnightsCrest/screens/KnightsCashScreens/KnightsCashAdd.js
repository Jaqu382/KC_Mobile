import { View, Text, StyleSheet, Pressable, SafeAreaView, TextInput} from "react-native";
import { Card } from '@rneui/themed';

import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect } from 'react';


export default function KnightsCashAdd({navigation, route}){
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

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Hello World</Text>
        </View>
      );
    }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    formCard: {
        width: 240,
        backgroundColor: "#FDF1BC",
        boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
      },
      fieldInput: {
        padding: 5,
        borderRadius: 5,
        backgroundColor: '#fff',
        fontSize: 15,
        color: "#000",
        boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
      },
      fieldInputSmall: {
        padding: 5,
        width: 50,
        borderRadius: 5,
        backgroundColor: '#fff',
        fontSize: 15,
        color: "#000",
        boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
      },
      fieldInputMedium: {
        padding: 5,
        width: 100 ,
        borderRadius: 5,
        backgroundColor: '#fff',
        fontSize: 15,
        color: "#000",
        boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
      },
      button: {
        width: 240,
        height:35,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 3,
        backgroundColor: "#ffc904",
        boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" 
  },
    })