import { View, Text, StyleSheet, Image } from "react-native";
import format from "date-fns/format";
import { Card } from "@rneui/themed";

// Global Styles
import { useTheme } from "../ThemeContext";
import { createGlobalStyles } from "../styles/globalStyles";

export default function IDfront(props) {
  const { fName, lName, kCashNum, libNumber, UCFID, caste, expDate, profile, pronoun } =
    props;

  const theme = useTheme();
  const globalStyles = createGlobalStyles(theme);

  return (
      <Card containerStyle={globalStyles.IDcard}>
        <View style={globalStyles.cardContent}>
          <Image
            style={globalStyles.profilePic}
            source={{ uri: profile }}
            alt="User profile picture"
          />
          <View style={globalStyles.nameAndCaste}>
            <Text style={globalStyles.userName}>
              <Text style={globalStyles.title}>
                {fName} {lName}
              </Text>
            </Text>
            <Text style={globalStyles.title}>
                ({pronoun})
              </Text>
            <Text style={globalStyles.caste}>{caste}</Text>
          </View>
        </View>
        <View style={globalStyles.details}>
          <View style={globalStyles.detailItem}>
            <Text style={globalStyles.subtitle}>UCF ID: </Text>
            <Text style={globalStyles.userProps}>{UCFID}</Text>
          </View>
          <View style={globalStyles.detailItem}>
            <Text style={globalStyles.subtitle}>Library Num: </Text>
            <Text style={globalStyles.userProps}>{libNumber}</Text>
          </View>
          <View style={globalStyles.detailItem}>
            <Text style={globalStyles.subtitle}>Knights Cash: </Text>
            <Text style={globalStyles.userProps}>{kCashNum}</Text>
          </View>
          <View style={globalStyles.detailItem}>
            <Text style={globalStyles.subtitle}>Expiration: </Text>
            <Text style={globalStyles.userProps}>{expDate}</Text>
          </View>
        </View>
      </Card>
  );
}