import { View, Text, StyleSheet, Image } from "react-native";
import { Card } from "@rneui/themed";

// Global Styles
import { useTheme } from "../ThemeContext";
import { createGlobalStyles } from "../styles/globalStyles";
import { ScrollView } from "react-native-gesture-handler";

export default function IDfront(props) {
  const { fName, lName, kCashNum, libNumber, UCFID, caste, expDate, profile, pronoun, nid } =
    props;

  const theme = useTheme();
  const globalStyles = createGlobalStyles(theme);
  const placeholderImage = "https://via.placeholder.com/80";

  return (
      <Card containerStyle={globalStyles.IDcard}>
        <View style={globalStyles.cardContent}>
        <Image
          style={globalStyles.profilePic}
          source={{
            uri: profile && profile.trim() !== "" ? profile : placeholderImage,
          }}
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
        <ScrollView>
        <View style={globalStyles.details}>
         
        <View style={globalStyles.detailItem}>
            <Text style={globalStyles.subtitle}>NID: </Text>
            <Text style={globalStyles.userProps}>{nid} </Text>
            <Image
              style = {globalStyles.icon}
              source={require('../assets/images/studentIcon.png')}
              alt="Student icon"
            />
          </View>
          <View style={globalStyles.detailItem}>
            <Text style={globalStyles.subtitle}>UCF ID: </Text>
            <Text style={globalStyles.userProps}>{UCFID} </Text>
            <Image
              style = {globalStyles.icon}
              source={require('../assets/images/idIcon.png')}
              alt="Student icon"
            />
          </View>
          <View style={globalStyles.detailItem}>
            <Text style={globalStyles.subtitle}>Library Num: </Text>
            <Text style={globalStyles.userProps}>{libNumber} </Text>
            <Image
              style={globalStyles.icon}
              source={require('../assets/images/libraryCard.png')}
              alt="Library book icon"
            />
          </View>
          <View style={globalStyles.detailItem}>
            <Text style={globalStyles.subtitle}>Knights Cash: </Text>
            <Text style={globalStyles.userProps}>{kCashNum} </Text>
            <Image
              style={globalStyles.icon}
              source={require('../assets/images/knightsCashIcon.png')}
              alt="Knights Cash icon"
            />
          </View>
          <View style={globalStyles.detailItem}>
            <Text style={globalStyles.subtitle}>Expiration Date: </Text>
            <Text style={globalStyles.userProps}>{expDate}</Text>
          </View>
          
          <View>
            
          </View>
        </View>
        </ScrollView>
      </Card>
  );
}