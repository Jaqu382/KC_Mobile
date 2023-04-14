import { View, Text , StyleSheet, Pressable, SafeAreaView } from "react-native";
import { Image } from 'react-native';

export default function LibraryMain({navigation, route}){
    return(
    <SafeAreaView style = {styles.container}>
        <Image source={require('../../assets/images/ucfLibrariesLogo.png')} style={{ width: 350, height: 100 }} />
        <View>
            <View style = {{paddingTop: 10}}>
            <Pressable style = {styles.button} onPress = {()=> navigation.navigate("Loans")}>
                <Text>Loans</Text>
            </Pressable>
            </View>
            <View style = {{paddingTop: 10}}>
            <Pressable style = {styles.button} onPress = {()=> navigation.navigate("Requests")}>
                <Text>Requests</Text>
            </Pressable>
            </View>
            <View style = {{paddingTop: 10}}>
            <Pressable style = {styles.button} onPress = {()=> navigation.navigate("Fees")}>
                <Text>Fines/Fees</Text>
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
        width: 240,
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