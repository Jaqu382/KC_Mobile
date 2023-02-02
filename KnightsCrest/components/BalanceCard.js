import { View, Text, StyleSheet } from "react-native"
import { Card } from '@rneui/themed';
export default function BalanceCard(props){
    const {hasBalance, balance} = props;
    
    if(hasBalance){
    return(
    <>
        <Card containerStyle = {styles.balanceCard}>
        <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
            <Text>Balance:</Text>
            <Text>
                {balance.toFixed(2)}
            </Text>
        </View>
        </Card>
    </>
  )}
  else
  {
    return(
        <Card containerStyle = {styles.balanceCard}>
        <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
            <Text>Balance:</Text>
            <Text>No balance at this time.</Text>
        </View>
        </Card>
    )
  }
}

const styles = StyleSheet.create({
    balanceCard: {
        width: 200,
        height: 50,
        backgroundColor: "#FDF1BC",
        boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
      },})