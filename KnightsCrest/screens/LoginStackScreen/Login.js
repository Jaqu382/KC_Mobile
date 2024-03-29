import { useState } from "react";
import { SafeAreaView, View, TextInput, Text, Button, Image, StyleSheet, Pressable } from "react-native";
import { Card } from '@rneui/themed';
import { Linking } from "react-native";

import firebaseConfig from "../../firebase";
import { getDatabase, ref, child, get } from "firebase/database";

import { useDispatch } from 'react-redux';
import { updateUser } from "../../slices/userSlice";

import CryptoJS from 'crypto-js';

// Warning message componant
function WarningMessage({ message }) {
  return message ? <Text style={styles.warningText}>{message}</Text> : null;
}

export default function Login({navigation, onLoginSuccess}) {
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
        onLoginSuccess();
        // If the passwords match, navigate to the home screen and update the user's information in Redux
        dispatch(updateUser({
          nid: userNid,
          firstName: userSnapshot.child("first_name").val(),
          lastName: userSnapshot.child("last_name").val(),
          pronoun: userSnapshot.child("pronouns").val(),
          campus: userSnapshot.child("campus").val(),
          ucfId: userSnapshot.child("ucf_id").val(),
          profilePicture: userSnapshot.child("profile_picture").val(),
          fineBalance: userSnapshot.child("fine_balance").val(),
          kcBalance: { balance: userSnapshot.child("kc_balance").child("balance").val() },
          libraryAccount: userSnapshot.child("library_account").val(),
          libraryLoans: userSnapshot.child("library_loans").val(),
          libraryRequests: userSnapshot.child("library_requests").val(),
          expirationDate: userSnapshot.child("expiration_date").val(),
          dateOfBirth: userSnapshot.child("date_of_birth").val(),
          caste: userSnapshot.child("caste").val(),
          knightsCashAccount: userSnapshot.child("knights_cash_account").val(),
          kcTransactions: userSnapshot.child("kc_transactions").val(),
        }));
        onLoginSuccess();
      } else {
        // If the passwords do not match, show a warning message
        setWarning("Invalid password");
      }
    } else {
      // If no user exists with the provided nid, show a warning message
      setWarning("Invalid account");
    }
  }

  async function hashPassword(password) {
    const hashedPassword = CryptoJS.SHA256(password);
    const hashedBase64 = hashedPassword.toString(CryptoJS.enc.Base64);
    return hashedBase64;
  }

  function onFocus(setter){
    setter(styles.fieldInputFocus);
  };

  function onBlur(setter){
    setter(styles.fieldInput);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.tabHorizontal} source={require("../../assets/images/TabLockup.png")} alt={'University of Central Florida'} />
        <Card containerStyle={styles.loginCard}>
          <View>
            <Text style={styles.fieldTitle}>Account</Text>
            <TextInput
              placeholder="Username: NID or DTC-Atlas ID"
              onChangeText={(text) => setAccount(text)}
              style={accountIsFocus}
              onFocus={() => onFocus(setAccountFocus)}
              onBlur={() => onBlur(setAccountFocus)}
            />
          <Text style={styles.fieldTitle}>Password</Text>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            style={passwordIsFocus}
            onFocus={() => onFocus(setPasswordFocus)}
            onBlur={() => onBlur(setPasswordFocus)}
          />
          <View>
            <WarningMessage message={showWarning} />
          </View>
          </View>
          <View style={{ paddingTop: 10 }}>
          <Pressable
            style={styles.signOnButton}
            onPress={() => validatePassword()}
            accessibilityLabel="Sign On"
          >
          <Text style={styles.signOnButtonText}>Sign On</Text>
          </Pressable>
          </View>
        </Card>
      </View>
      <View style={{ paddingTop: 10}}>
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
    },
    signOnButton: {
      backgroundColor: '#000',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
    },
    signOnButtonText: {
      color: '#fff',
      fontSize: 16,
    }
  });