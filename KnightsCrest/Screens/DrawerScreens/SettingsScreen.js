import { View, Text, SafeAreaView, StyleSheet } from "react-native"

export default function SettingsScreen(){
    return(
        <SafeAreaView style = {styles.container}>
        <View>
            <Text>asds</Text>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },})