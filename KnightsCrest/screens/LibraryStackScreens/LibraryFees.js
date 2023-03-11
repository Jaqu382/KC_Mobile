import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import BalanceCard from "../../components/BalanceCard";

// Redux
import { useSelector } from "react-redux";
import { selectUser } from '../../slices/userSlice';

export default function LibraryFees({ navigation }) {
  const user = useSelector(selectUser);
  const fineBalance = user.fineBalance;
  const kcBalance = user.kcBalance.balance.balance;
  return (
    <SafeAreaView style={styles.container}>
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