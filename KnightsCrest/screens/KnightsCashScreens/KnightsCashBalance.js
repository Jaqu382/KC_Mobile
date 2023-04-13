import React from 'react';
import { useState } from 'react';
import { View, Text, Switch, FlatList, SafeAreaView,StyleSheet, } from 'react-native';

// To reset screens
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from "react";

import { useSelector, useDispatch } from 'react-redux';
import { selectUser, toggleCardSuspension } from '../../slices/userSlice';

export default function AccountBalanceScreen({navigation} ) {
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

  const toggleSwitch = () => {
    dispatch(toggleCardSuspension());
  };

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
          value={user.cardSuspended}
        />
      </View>
      <View>
        <Text>Transaction History:</Text>
        {user.kcTransactions.length === 0 ? (
          <Text>No transactions found.</Text>
        ) : (
          <FlatList
            data={user.kcTransactions}
            renderItem={renderItem}
            keyExtractor={(transaction) => transaction.id.toString()}
          />
        )}
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
    