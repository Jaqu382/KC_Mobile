import React from 'react';
import { View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useSelector } from 'react-redux';  

export default function QR (){

    const user = useSelector((state) => state.user);
    const userData = {
      nid: user.nid,
      firstName: user.firstName,
      lastName: user.lastName,
      ucfID: user.ucfId,
      knightsCashAccount: user.knightsCashAccount,
      libraryCard: user.libraryCard,
    };    
    const userString = JSON.stringify(userData);

    return (
    <View style = {{backgroundColor:'black', padding: 10}}>
    <QRCode
      size={265}
      value={userString}
      color="black"
      backgroundColor="white"
    /></View>
  );
}