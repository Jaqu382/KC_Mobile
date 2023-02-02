import { View, Text, StyleSheet, Pressable} from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { Card } from '@rneui/themed';
import FormButton from "../../components/FormButton";
import { SafeAreaView } from "react-native-safe-area-context";

export default function KnightsCashAdd({navigation}){
    
    return(
        <SafeAreaView style = {styles.container}>
            <View>
                <Text>ADD KNIGHTS CASH FUND</Text>
            </View>
            <Card containerStyle = {styles.formCard}>
                <View>
                    <Text>Amount to Add</Text>
                    <TextInput style = {styles.fieldInput}></TextInput>
                </View>
            </Card>
            <Card containerStyle = {styles.formCard}>
                <View>
                    <Text>Email Address</Text>
                    <TextInput style = {styles.fieldInput}></TextInput>
                    </View>
                <View>
                    <Text>Cardholder Name</Text>
                    <TextInput style = {styles.fieldInput}></TextInput>
                    </View>
                <View>
                    <Text>Card Number</Text>
                    <TextInput style = {styles.fieldInput}></TextInput>
                </View>
                <View style = {{flexDirection: "Row", justifyContent:"space-between" }}>
                    <View>
                        <Text>Security Code</Text>
                        <TextInput style = {styles.fieldInput}></TextInput>
                    </View>
                    <View>
                        <Text>Exp. Date</Text>
                        <TextInput style = {styles.fieldInput}></TextInput>
                    </View>
                </View>
            </Card>
            <View style = {{paddingTop: 10}}>
                <Pressable style = {styles.button}>
                    <Text>Add Funds</Text>
                </Pressable>
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
    },
    formCard: {
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
      button: {
        width: 250,
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