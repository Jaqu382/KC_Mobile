import { View, Text, StyleSheet, Image} from "react-native";
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
                {fName} {lName}
              </Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.content}>
            <Image
              style={styles.profilePic}
              source={profile}
              alt="User profile picture"
            />
            <View style={{ flex: 1 }}>
                <Text style={styles.caste}>{caste}</Text>
                <Text style={styles.userProps}>UCF ID: {UCFID}</Text>
                <Text style={styles.userProps}>Library Num: {libNumber}</Text>
                <Text style={styles.userProps}>Knights Cash: {kCashNum}</Text>
                <Text style={styles.userProps}>Expiration: {formatDate}</Text>
            </View>
          </View>
        </View>
      </Card>
    );
  }
  
  const styles = StyleSheet.create({
    IDcard: {
        backgroundColor:"#FFC904",
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
            width: 100,
            height: 100,
            borderRadius: 10,
            marginRight: 20,
        },
        userProps: {
            fontSize: 12,
            color: "#666",
            marginBottom: 2,
        },
        caste: {
            fontSize: 16,
            fontWeight: "bold",
            marginTop: 10,
        },
        userName: {
            fontWeight: "bold",
            fontSize: 16,
            marginBottom: 5,
        },
    });