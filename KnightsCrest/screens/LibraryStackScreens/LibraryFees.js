import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import BalanceCard from "../../components/BalanceCard";

import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect } from 'react';

// Redux
import { useSelector } from "react-redux";
import { selectUser } from '../../slices/userSlice';



export default function LibraryFees({ navigation }) {
  useFocusEffect(
    React.useCallback(() => {
      // Reset the nested stack navigator when the tab is focused
      const unsubscribe = navigation.addListener('tabPress', (e) => {
        e.preventDefault(); // Prevent the default behavior
        navigation.navigate('Library Menu'); // Navigate to the first screen of the nested stack navigator
      });

      return unsubscribe;
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