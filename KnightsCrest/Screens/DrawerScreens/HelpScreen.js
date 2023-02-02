import { View, Text, SafeAreaView, StyleSheet} from "react-native"

export default function HelpScreen(){
    return(
        <SafeAreaView style = {styles.container}>
        <View>
            <View>
                <Text>Notifications</Text>
            </View>
            <View>
                <View>
                    <Text></Text>
                </View>
            </View>
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