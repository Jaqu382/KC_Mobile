import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import BalanceCard from "../../components/BalanceCard";

import React, { useEffect } from 'react';

// Redux
import { useSelector } from "react-redux";
import { selectUser } from '../../slices/userSlice';

// To reset screens
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from "react";

export default function LibraryFees({ navigation }) {
    // Reset to menu whenever we go to another tab.
    useFocusEffect(
      useCallback(() => {
        const unsubscribe = navigation.addListener('blur', () => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Library Menu' }],
          });
        });
    
        return () => {
          // Clean up the listener when the component is unmounted or the tab is blurred
          unsubscribe();
        };
      }, [navigation])
    );
  
  const user = useSelector(selectUser);
  const fineBalance = user.fineBalance;
  const kcBalance = user.kcBalance.balance.balance;
  return (
    <SafeAreaView style = {styles.container}>
      <View>
        <Text>Loan balance:</Text>
      </View>
      <BalanceCard hasBalance={fineBalance > 0} balance={fineBalance} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
}); 