import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import BalanceCard from "../../components/BalanceCard";

import React, { useEffect } from 'react';

// Redux
import { useSelector } from "react-redux";
import { selectUser } from '../../slices/userSlice';


// Import global styles
import { useTheme } from '../../ThemeContext';
import { createGlobalStyles } from '../../styles/globalStyles';

export default function LibraryFees({ navigation }) {

  const user = useSelector(selectUser);
  const fineBalance = user.fineBalance;
  const kcBalance = user.kcBalance.balance.balance;

  const theme = useTheme();
  const globalStyles = createGlobalStyles(theme);

  return (
    <SafeAreaView style={globalStyles.container}>
      <View>
        <Text style={globalStyles.titleText}>Library Fine Balance:</Text>
      </View>
      <BalanceCard hasBalance={fineBalance > 0} balance={fineBalance} theme = {theme} />
    </SafeAreaView>
  );
}
