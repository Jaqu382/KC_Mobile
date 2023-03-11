import { View, Text, StyleSheet, Image } from "react-native";
import format from "date-fns/format";
import { Card } from "@rneui/themed";

export default function IDfront(props) {
  const { fName, lName, kCashNum, libNumber, UCFID, caste, expDate, profile } =
    props;

  let myDate = new Date(expDate);
  let formatDate = format(myDate, "MM/dd/yyyy");

  return (
    <Card containerStyle={styles.IDcard}>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 10,
          padding: 15,
          borderWidth: 3,
          borderColor: "black",
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={styles.userName}>
              <Text style={styles.title}>{fName} {lName}</Text>
            </Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.content}>
          <Image
            style={styles.profilePic}
            source={{uri: profile}}
            alt="User profile picture"
          />
          <View>
            <Text style = {styles.caste}>{caste}</Text>
            <Text style={styles.userProps}>
              <Text style={styles.subtitle}>UCF ID:</Text> {UCFID}
            </Text>
            <Text style={styles.userProps}>
              <Text style={styles.subtitle}>Library Num:</Text> {libNumber}
            </Text>
            <Text style={styles.userProps}>
              <Text style={styles.subtitle}>Knights Cash:</Text> {kCashNum}
            </Text>
            <Text style={styles.userProps}>
              <Text style={styles.subtitle}>Expiration:</Text> {formatDate}
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  IDcard: {
    backgroundColor: "#FFC904",
    width: 230,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 14,
  },
  logo: {
    width: 50,
    height: 50,
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
  },
  content: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 20,
  },
  userProps: {
    fontSize: 10,
    marginBottom: 2,
  },
  caste: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 2,
  },
  userName: {
    fontSize: 14,
  },
});