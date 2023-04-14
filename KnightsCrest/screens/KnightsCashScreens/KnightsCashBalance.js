import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Switch, FlatList, SafeAreaView } from 'react-native';

// To reset screens
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from "react";

import { useSelector, useDispatch } from 'react-redux';
import { selectUser, toggleCardSuspension } from '../../slices/userSlice';

// Theme and styles
import { useTheme } from '../../ThemeContext';
import { createGlobalStyles } from '../../styles/globalStyles';
import Transaction from '../../components/Transaction';

export default function AccountBalanceScreen({navigation}) {
  const theme = useTheme();
  const globalStyles = createGlobalStyles(theme);

  // Reset to menu whenever we go to another tab.
  useFocusEffect(
    useCallback(() => {
      const unsubscribe = navigation.addListener('blur', () => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Knights Cash Menu' }],
        });
      });

      return () => {
        // Clean up the listener when the component is unmounted or the tab is blurred
        unsubscribe();
      };
    }, [navigation])
  );
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (user.kcTransactions.length > 0 && user.kcTransactions[0].empty) {
      setTransactions(user.kcTransactions.slice(1));
    } else {
      setTransactions(user.kcTransactions);
    }
  }, [user.kcTransactions]);

  const toggleSwitch = () => {
    dispatch(toggleCardSuspension());
  };

  const renderItem = ({ item: transaction }) => (
    <Transaction date={transaction.date} amount={transaction.amount} />
  );

  return (
    <SafeAreaView style = {globalStyles. container}>
      <View>
        <View>
          <Text style={globalStyles.text}>Welcome {user.firstName} {user.lastName}</Text>
        </View>
        <View style = {globalStyles.card}>
          <Text style={globalStyles.text}>Account Balance: ${user.kcBalance.balance}</Text>
        </View>
        <View style = {globalStyles.card}>
          <Text style={globalStyles.text}>Suspend Card</Text>
          <Switch
            onValueChange={toggleSwitch}
            value={user.cardSuspended}
          />
        </View>
        <View style = {globalStyles.card}>
          <Text style={globalStyles.text}>Transaction History:</Text>
          {user.kcTransactions[0].empty ? (
            <Text>No transactions found.</Text>
          ) : (
            <View style={{ maxHeight: transactions.length * 20 }}>
            <FlatList
               data={transactions.slice(0, 10)} 
              renderItem={renderItem}
              keyExtractor={(transaction) => transaction.id.toString()
              }
            />
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
    