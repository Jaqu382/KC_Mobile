import React from 'react';
import { View, Text, Switch, FlatList, SafeAreaView,StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { selectUser } from '../../slices/userSlice';

export default function AccountBalanceScreen() {
  const user = useSelector(selectUser);

  const [isCardSuspended, setIsCardSuspended] = React.useState(false);
  const toggleSwitch = () => setIsCardSuspended((previousState) => !previousState);

  const renderItem = ({ item: transaction }) => (
    <View>
      <Text>{transaction.date}</Text>
      <Text>{transaction.amount ? `$${transaction.amount}` : ''}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <View>
        <Text>Account Balance: ${user.kcBalance.balance}</Text>
      </View>
      <View>
        <Text>Suspend Card</Text>
        <Switch
          onValueChange={toggleSwitch}
          value={isCardSuspended}
        />
      </View>
      <View>
        <Text>Transaction History:</Text>
        <FlatList
        data={user.kcTransactions}
        renderItem={renderItem}
        keyExtractor={(transaction) => transaction.id.toString()}
        />
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
    