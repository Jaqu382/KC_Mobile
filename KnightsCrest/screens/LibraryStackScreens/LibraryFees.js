import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import BalanceCard from "../../components/BalanceCard";

import React, { useEffect } from 'react';

// Redux
import { useSelector } from "react-redux";
import { selectUser } from '../../slices/userSlice';

// To reset screens
import { useFocusEffect} from '@react-navigation/native';
import { useCallback } from "react";

// Import global styles
import { useTheme } from '../../ThemeContext';
import { createGlobalStyles } from '../../styles/globalStyles';

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
