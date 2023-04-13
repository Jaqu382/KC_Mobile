import { View, Text, StyleSheet, Pressable, SafeAreaView, TextInput,TouchableOpacity,} from "react-native";
import { Card } from '@rneui/themed';

import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect,useState } from 'react';

import { useSelector } from 'react-redux';
import { selectUser } from '../../slices/userSlice';

export default function KnightsCashAdd({navigation, route}){
  const user = useSelector(selectUser);
  useFocusEffect(
    React.useCallback(() => {
      // Reset the nested stack navigator when the tab is focused
      const unsubscribe = navigation.addListener('tabPress', (e) => {
        e.preventDefault(); // Prevent the default behavior
        navigation.navigate('Knights Cash Menu'); // Navigate to the first screen of the nested stack navigator
      });

      return unsubscribe;
    }, [navigation])
  );

  const [selectedAmount, setSelectedAmount] = useState(5);
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const [emailError, setEmailError] = useState('');
  const [cardNumberError, setCardNumberError] = useState('');
  const [expiryDateError, setExpiryDateError] = useState('');
  const [cvvError, setCvvError] = useState('');

  function handleAddFunds() {
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!validateCardNumber(cardNumber)) {
      setCardNumberError('Invalid card number');
      valid = false;
    } else {
      setCardNumberError('');
    }

    if (!validateExpiryDate(expiryDate)) {
      setExpiryDateError('Invalid expiry date');
      valid = false;
    } else {
      setExpiryDateError('');
    }

    if (!validateCVV(cvv)) {
      setCvvError('Invalid CVV');
      valid = false;
    } else {
      setCvvError('');
    }

    if (valid) {
      // Process transaction
    }
  }

  function validateEmail(email) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  }

  function validateCardNumber(cardNumber) {
    const cardNumberRegex = /^\d{12,19}$/;
    return cardNumberRegex.test(cardNumber);
  }

  function validateExpiryDate(expiryDate) {
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    return expiryDateRegex.test(expiryDate);
  }

  function validateCVV(cvv) {
    const cvvRegex = /^[0-9]{3,4}$/;
    return cvvRegex.test(cvv);
  }

return (
  <SafeAreaView style={styles.container}>
    {user.cardSuspended ? (
        <Text>Your card is suspended. You cannot add funds at this time.</Text>
      ) : (
    <View >
      <Text style={styles.title}>Add Funds</Text>
      <Text>Select an amount:</Text>
      <View style={styles.amountButtons}>
        {[5, 10, 15, 20, 25].map(amount => (
          <TouchableOpacity
            key={amount}
            style={
              amount === selectedAmount
                ? styles.amountButtonSelected
                : styles.amountButton
            }
            onPress={() => setSelectedAmount(amount)}>
            <Text style={styles.amountButtonText}>${amount}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />        
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      <Text>Card Number:</Text>
      <TextInput
        style={styles.input}
        value={cardNumber}
          onChangeText={setCardNumber}
          keyboardType="number-pad"
          maxLength={19}/>
            {cardNumberError ? (
    <Text style={styles.errorText}>{cardNumberError}</Text>
  ) : null}
  <Text>Expiry Date (MM/YY):</Text>
  <TextInput
    style={styles.input}
    value={expiryDate}
    onChangeText={setExpiryDate}
    maxLength={5}
  />
  {expiryDateError ? (
    <Text style={styles.errorText}>{expiryDateError}</Text>
  ) : null}
  <Text>CVV:</Text>
  <TextInput
    style={styles.input}
    value={cvv}
    onChangeText={setCVV}
    keyboardType="number-pad"
    maxLength={4}
  />
  {cvvError ? <Text style={styles.errorText}>{cvvError}</Text> : null}
  <TouchableOpacity style={styles.submitButton} onPress={handleAddFunds}>
    <Text style={styles.submitButtonText}>Add Funds</Text>
  </TouchableOpacity>
</View>)}
</SafeAreaView>
);
    }

    const styles = StyleSheet.create({
      container: {
      flex: 1,
      padding: 20,
      },
      title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      },
      amountButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
      },
      amountButton: {
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      },
      amountButtonSelected: {
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor: 'black',
      },
      amountButtonText: {
      color: 'black',
      },
      input: {
      borderWidth: 1,
      borderColor: 'black',
      padding: 10,
      marginBottom: 10,
      },
      submitButton: {
      backgroundColor: 'black',
      padding: 10,
      alignItems: 'center',
      },
      submitButtonText: {
      color: 'white',
      fontWeight: 'bold',
      },
      errorText: {
      color: 'red',
      marginBottom: 10,
      },
      });