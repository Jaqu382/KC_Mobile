import { View, Text, StyleSheet, Pressable, SafeAreaView, TextInput,TouchableOpacity,} from "react-native";
import React, {useState } from 'react';
import { ScrollView } from "react-native-gesture-handler";


// redux
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, updateBalance } from '../../slices/userSlice';

// Firebase
import db from '../../firebase';
import { ref, update } from 'firebase/database';

// Global Styles
import { useTheme } from '../../ThemeContext';
import { createGlobalStyles } from '../../styles/globalStyles';

export default function KnightsCashAdd({navigation, route}){

  const theme = useTheme();
  const globalStyles = createGlobalStyles(theme);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState('');

  const [selectedAmount, setSelectedAmount] = useState(5);
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const [emailError, setEmailError] = useState('');
  const [cardNumberError, setCardNumberError] = useState('');
  const [expiryDateError, setExpiryDateError] = useState('');
  const [cvvError, setCvvError] = useState('');

  const handleAddFunds = () => {
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
      if (!user.cardSuspended) {
        const newBalance = parseFloat(user.kcBalance.balance) + parseFloat(selectedAmount);
        const newTransaction = {
          amount: parseFloat(selectedAmount),
          date: new Date().toISOString(),
          id: user.kcTransactions[0].empty ? 1 : user.kcTransactions.length + 1,
        };
        // Update the user's balance and transactions in the Redux store
        dispatch(updateBalance({ balance: newBalance, transaction: newTransaction }));
        let updatedTransactions; 
        // Check if the first transaction has the empty property
        if (user.kcTransactions[0].empty) {
          // Replace the first object with the new transaction
          updatedTransactions = [newTransaction];
        } else {
          // Add the new transaction to the existing array
          updatedTransactions = [...user.kcTransactions, newTransaction];
        }
        // Update the user's balance and transactions in the Firebase Realtime Database
        const userRef = ref(db, `users/${user.nid}`);
        update(userRef, {
          kc_balance: { balance: newBalance },
          kc_transactions: updatedTransactions,
        });
        setSelectedAmount(5);
        alert('Funds added successfully!');
      } else {
        alert('Your card is suspended. You cannot add funds.');
      }
    }
  };
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
    <SafeAreaView style={globalStyles.container}>
      {user.cardSuspended ? (
        <View>
          <Text style={globalStyles.suspendedText}>Your card is suspended.{"\n"}You cannot add funds at this time.</Text>
        </View>
      ) : (
        <View>
          <View>
            <Text style={globalStyles.titleText}>Add Funds:</Text>
          </View>
          <View style = {globalStyles.addForm}>
          <Text style={globalStyles.fieldTitle}>Select an amount:</Text>
          <View style={globalStyles.amountButtons}>
            {[5, 10, 20, 50].map(amount => (
              <TouchableOpacity
              key={amount}
              style={
                amount === selectedAmount
                  ? globalStyles.amountButtonSelected
                  : globalStyles.amountButton
              }
              onPress={() => setSelectedAmount(amount)}>
              <Text style={globalStyles.amountButtonText}>${amount}</Text>
            </TouchableOpacity>
            ))}
          </View>
          <Text style={globalStyles.fieldTitle}>Email:</Text>
          <TextInput
            style={[globalStyles.fieldInput, emailError ? globalStyles.warningText : {}]}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {emailError ? <Text style={globalStyles.warningText}>{emailError}</Text> : null}
          <Text style={globalStyles.fieldTitle}>Card Number:</Text>
          <TextInput
            style={[globalStyles.fieldInput, cardNumberError ? globalStyles.warningText : {}]}
            value={cardNumber}
            onChangeText={setCardNumber}
            keyboardType="number-pad"
            maxLength={19}
          />
          {cardNumberError ? <Text style={globalStyles.warningText}>{cardNumberError}</Text> : null}
          <Text style={globalStyles.fieldTitle}>Expiry Date (MM/YY):</Text>
          <TextInput
            style={[globalStyles.fieldInput, expiryDateError ? globalStyles.warningText : {}]}
            value={expiryDate}
            onChangeText={setExpiryDate}
            maxLength={5}
          />
          {expiryDateError ? <Text style={globalStyles.warningText}>{expiryDateError}</Text> : null}
          <Text style={globalStyles.fieldTitle}>CVV:</Text>
          <TextInput
            style={[globalStyles.fieldInput, cvvError ? globalStyles.warningText : {}]}
            value={cvv}
            onChangeText={setCVV}
            keyboardType="number-pad"
            maxLength={4}
          />
          {cvvError ? <Text style={globalStyles.warningText}>{cvvError}</Text> : null}
          </View>
          <TouchableOpacity style={globalStyles.alternateButton} onPress={handleAddFunds}>
            <Text style={globalStyles.text}>Add Funds</Text>
          </TouchableOpacity>
          
        </View>
      )}
    </SafeAreaView>
  );
}