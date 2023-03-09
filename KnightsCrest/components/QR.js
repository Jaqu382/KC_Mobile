import React from 'react';
import QRCode from 'react-native-qrcode-svg';

export default function QR (props){

    const {user} = props
    const userString = JSON.stringify(user);
    return(     
            <QRCode
            size={150}
            value = {user}
            color="black"
            backgroundColor="white"
            />
        )
    }