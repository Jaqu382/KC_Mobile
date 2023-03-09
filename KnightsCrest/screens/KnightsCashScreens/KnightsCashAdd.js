import { View, Text, StyleSheet, Pressable, SafeAreaView, TextInput} from "react-native";
import { Card } from '@rneui/themed';

export default function KnightsCashAdd({navigation, route}){
    return(
        <SafeAreaView style = {styles.container}>
            <View>
                <Text>ADD KNIGHTS CASH FUNDS</Text>
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
                <View style = {{flexDirection: "Row"}}>
                    <View style = {{paddingRight: 5}}>
                        <Text>Security Code</Text>
                        <TextInput style = {[styles.fieldInputSmall]}></TextInput>
                    </View>
                    <View>
                        <Text>Exp. Date</Text>
                        <TextInput style = {styles.fieldInputMedium}></TextInput>
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