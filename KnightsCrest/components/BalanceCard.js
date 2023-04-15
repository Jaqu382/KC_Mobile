import { View, Text } from "react-native";
import { Card } from "@rneui/themed";
import { createGlobalStyles } from '../styles/globalStyles';

export default function BalanceCard(props) {
  const { hasBalance, balance, theme } = props;

  const globalStyles = createGlobalStyles(theme);

  return (
    <Card containerStyle={globalStyles.card}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={globalStyles.text}>Balance: </Text>
        <Text style={globalStyles.text}>
          {hasBalance ? `$${balance.toFixed(2)}`  : "No balance at this time."}
        </Text>
      </View>
    </Card>
  );
}