import { useState } from "react";
import { View, Text, StyleSheet, Switch,SafeAreaView} from "react-native";
import { Card } from "@rneui/themed";
import Transaction from "../../components/Transaction";

export default function KnightsCashBalance({navigation, route})
{
    let myBalance = 0.00;
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return(
    <SafeAreaView style = {styles.container}>
    <View >
        <Text>Welcome fName lName</Text>
        <Card containerStyle = {styles.subSec}>
            <View style ={styles.horizontalFlex}>
                <Text>Balance:                               </Text>
                <Text>${myBalance.toFixed(2)}</Text>
            </View>
        </Card>
        <Card containerStyle = {styles.subSec}>
            <View style ={styles.horizontalFlex}>
                <Text>Suspend Card:                     </Text>
                <Switch
                    trackColor={{false: '#767577', true: '#FFC904'}}
                    thumbColor = '#fff'
                    onValueChange={toggleSwitch}
                    activeThumbColor= '#fff'
                    value={isEnabled}/>
            </View>
            <Text>KnightsCash number</Text>
        </Card>
        <Card containerStyle = {styles.subSec}>
        <View style = {{justifyContent: "center",alignItems: "center"}}>
            <Text>Transaction History</Text>
        </View>
        <View style ={{flexDirection:"Row", justifyContent:"space-between"}}>
            <Text>Date</Text>
            <Text>Funds In/Out</Text>
        </View>
        <View>
            <Transaction date ="2025-02-03T12:00:00" amount = {2.50}/>
        </View>
        </Card>
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
    subSec: {
        Height: "fit-content",
        width: 240,
        backgroundColor: "#FDF1BC",
        boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
      },
    horizontalFlex: {
        flexDirection: "row"
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
    }
    })
    