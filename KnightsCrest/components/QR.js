import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import { useSelector } from 'react-redux';  

export default function QR (){

    const user = useSelector((state) => state.user);
    const userString = JSON.stringify(user);

    return (
    <QRCode
      size={150}
      value={userString}
      color="black"
      backgroundColor="white"
    />
  );
}