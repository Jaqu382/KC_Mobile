import { useState } from "react";
import { SafeAreaView, View, TextInput, Text, Button, Image, StyleSheet } from "react-native";
import { Card } from '@rneui/themed';
import { Linking } from "react-native";

import firebaseConfig from "../../firebase";
import { getDatabase, ref, child, get } from "firebase/database";

import { useDispatch } from 'react-redux';
import { updateUser } from "../../slices/userSlice";



// Warning message componant
function WarningMessage({ message }) {
  return message ? <Text style={styles.warningText}>{message}</Text> : null;
}

export default function Login({navigation}) {
  const dispatch = useDispatch();
  // Control styling
  const [accountIsFocus, setAccountFocus] = useState(styles.fieldInput);
  const [passwordIsFocus, setPasswordFocus] = useState(styles.fieldInput);

  // Contain user input
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  // Hold warning message
  const [showWarning, setWarning] = useState("");

  async function validatePassword() {
    // Get a reference to the Firebase Realtime Database
    const dbRef = ref(getDatabase());
  
    // Get the user's input for nid and password
    const userNid = account.trim();
    const userPassword = await hashPassword(password.trim());
  
    // Check if a user exists with the provided nid
    const userSnapshot = await get(child(dbRef, `users/${userNid}`));
    if (userSnapshot.exists()) {
      // If the user exists, compare the passwords
      const hashedPassword = userSnapshot.child("password").val();
      if (hashedPassword === userPassword) {
        // If the passwords match, navigate to the home screen and update the user's information in Redux
        dispatch(
          updateUser({            
            firstName: userSnapshot.child("first_name").val(),
            lastName: userSnapshot.child("last_name").val(),
            caste: userSnapshot.child("caste").val(),
            dateOfBirth: userSnapshot.child("date_of_birth").val(),
            profilePicture: userSnapshot.child("profile_picture").val(),
            nid: userNid,
            ucfId: userSnapshot.child("ucf_id").val(),
            campus: userSnapshot.child("campus").val(),
            expirationDate: userSnapshot.child("expiration_date").val(),
            knightsCashAccount: userSnapshot.child("knights_cash_account").val(),
            kcBalance: userSnapshot.child("kc_balance").val(),
            libraryAccount: userSnapshot.child("library_account").val(),
            libraryLoans: userSnapshot.child("library_loans").val(),
          })
        );
        navigation.navigate('Home');
      } else {
        // If the passwords do not match, show a warning message
        setWarning("Invalid password");
      }
    } else {
      // If no user exists with the provided nid, show a warning message
      setWarning("Invalid account");
    }
  }
  // Same hashing method used in admin javascript
  async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashedPassword = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hashedPassword))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.tabHorizontal} source={require("../../assets/images/TabLockup.png")} alt={'University of Central Florida'} />
        <Card containerStyle={styles.loginCard}>
          <View>
            <Text style={styles.fieldTitle}>Account</Text>
            <TextInput
              placeholder='Username: NID or DTC-Atlas ID'
              onChangeText={(text) => {
                setAccount(text);
                setAccountFocus(styles.fieldInputFocus);
              }}
              style={accountIsFocus}
            />
            <Text style={styles.fieldTitle}>Password</Text>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(text) => {
                setPassword(text);
                setPasswordFocus(styles.fieldInputFocus);
              }}
              style={passwordIsFocus}
            />
          <View>
            <WarningMessage message={showWarning} />
          </View>
          </View>
          <View style={{ paddingTop: 10 }}>
            <Button
              color={"#000"}
              title="Sign On"
              accessibilityLabel="Sign On"
              onPress={() => validatePassword()}
            ></Button>
          </View>
        </Card>
      </View>
      <View style={{ paddingTop: 10 }}>
        <Text>By signing on, you agree to the terms of the </Text>
        <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://policies.ucf.edu/')}>UCF Policies & Procedures.</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    fieldInput: {
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#fff',
      fontSize: 15,
      color: "#D4D4D4",
      boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
    },
    fieldTitle: {
      fontWeight: "bold"
    },
    fieldInputFocus: {
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#fff',
      fontSize: 15,
      color: "#000",
      boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
    },
    warningText: {
      color: "red"
    },
    loginCard: {
      backgroundColor: "#FDF1BC",
      boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
    },
    hyperlink: {
      color: "blue",
      textDecorationLine: "underline"
    },
    tabHorizontal: {
        width:313,
        height:76  
    }
  });