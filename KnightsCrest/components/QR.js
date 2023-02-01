import React from 'react';
import QRCode from 'react-native-qrcode-svg';

export default function QR (props){
    const {UCFID} = props
    return(     
            <QRCode
            size={155}
            value ={UCFID}
            color="black"
            backgroundColor="white"
            />
        )
    }