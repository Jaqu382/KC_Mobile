import { View, Text, StyleSheet, Pressable, SafeAreaView, TextInput,TouchableOpacity,} from "react-native";
import { Card } from '@rneui/themed';

import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect,useState } from 'react';


export default function KnightsCashAdd({navigation, route}){
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
  <View style={styles.container}>
    <Text style={styles.title}>Add Funds</Text>
    <Text>Select Amount:</Text>
    <View style={styles.amountButtons}>
      {amounts.map((amount) => (
        <TouchableOpacity
          key={amount}
          style={selectedAmount === amount ? styles.amountButtonSelected : styles.amountButton}
          onPress={() => setSelectedAmount(amount)}
        >
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
    />
    {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
    <Text>Card Number:</Text>
    <TextInput
      style={styles.input}
      value={cardNumber}
      onChangeText={setCardNumber}
      keyboardType="number-pad"
      maxLength={19}
    />
    {cardNumberError ? (
      <Text style={styles.errorText}>{cardNumberError}</Text>
    ) : null}
    <Text>Expiry Date (MM/YY):</Text>
    <TextInput
      style={styles.input}
      value={expiryDate}
      onChangeText={setExpiryDate}
      keyboardType="number-pad"
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
  </View>
);
    }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
    })