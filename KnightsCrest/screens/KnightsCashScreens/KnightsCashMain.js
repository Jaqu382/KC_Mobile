import { View, Text , StyleSheet, Pressable, SafeAreaView } from "react-native";
import React, { useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Image } from 'react-native';


export default function KnightsCashMain({navigation}){
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
    <SafeAreaView style = {styles.container}>
      <Image source={require('../../assets/images/knightsCashLogo.png')} style={{ width: 350, height: 130 }} />
        <View>    
            <View style = {{paddingTop: 10}}>
            <Pressable style = {styles.button} onPress = {()=> navigation.navigate("Balance")}>
                <Text>Check Balance</Text>
            </Pressable>
            </View>
            <View style = {{paddingTop: 10}}>
            <Pressable style = {styles.button} onPress = {()=> navigation.navigate("Add")}>
                <Text>Add funds</Text>
            </Pressable>
            </View>
        </View>
    </SafeAreaView>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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
        backgroundColor: 'white',
        boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
    }})