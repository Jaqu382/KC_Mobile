import { View, Text, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Card } from '@rneui/themed';
import BalanceCard from "../../components/BalanceCard";
export default function LibraryFees(props){
  //const{hasBalance, balance} = props;
  let hasBalance = true;
  let balance = 7.00;
  return(
    <SafeAreaView style = {styles.container}> 
        <View>
            <Text>Late Fees</Text>
            <Text>Loan balance</Text>
        </View>
        <BalanceCard hasBalance = {hasBalance} balance = {balance}/>
   </SafeAreaView>)
}



const styles = StyleSheet.create({
    container: {
      paddingTop: 10,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },})