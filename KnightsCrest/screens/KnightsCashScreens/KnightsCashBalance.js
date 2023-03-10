import { useState } from "react";
import { View, Text, StyleSheet, Switch,SafeAreaView} from "react-native";
import { Card } from "@rneui/themed";
import Transaction from "../../components/Transaction";

// Redux
import { useSelector } from "react-redux";
import { selectUser } from '../../slices/userSlice';


export default function KnightsCashBalance({ navigation, route }) {
    // Grab user from redux
    const user = useSelector(selectUser);
    console.log(user);
  
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>
            Welcome {user.firstName} {user.lastName}
          </Text>
          <Card containerStyle={styles.subSec}>
            <View style={styles.horizontalFlex}>
              <Text>Balance: </Text>
              <Text>${user.kcBalance.balance.balance.toFixed(2)}</Text>
            </View>
          </Card>
          <Card containerStyle={styles.subSec}>
            <View style={styles.horizontalFlex}>
              <Text>Suspend Card: </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#FFC904" }}
                thumbColor="#fff"
                onValueChange={toggleSwitch}
                activeThumbColor="#fff"
                value={isEnabled}
              />
            </View>
            <Text>KnightsCash number {user.knightsCashAccount}</Text>
          </Card>
          <Card containerStyle={styles.subSec}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text>Transaction History</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text>Date</Text>
              <Text>Funds In/Out</Text>
            </View>
            {user.kcTransactions && user.kcTransactions.length > 0 ? (
              <View>
                {user.kcTransactions.map((transaction, index) => (
                  <Transaction key={index} date={transaction.date} amount={transaction.amount} />
                ))}
              </View>
            ) : (
              <View style={{ alignItems: "center", marginVertical: 20 }}>
                <Text>No transaction history found.</Text>
              </View>
            )}
          </Card>
        </View>
      </SafeAreaView>
    );
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
    