import { View, Text , StyleSheet, Pressable} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LibraryMain({navigation, route}){
    return(
    <SafeAreaView style = {styles.container}>
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
        boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)"
    }})