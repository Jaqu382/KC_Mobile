import { View, Text, StyleSheet} from "react-native";
import { Card } from "@rneui/base";
import QR from "./QR";
import MyBarcode from "./MyBarcode";
import sharedStyles from "../SharedStyle";
export default function IDback(props){
    const {UCFID, fName,lName,kCashNum,libNumber,caste,expDate} = props;
    return(
        <>
            <Card containerStyle = {styles.IDcard}>
                <View>
                    <Text style = {[sharedStyles.bodyText, {fontWeight:"bold"}]}>QR CODE</Text>
                </View>
                <View style = {{backgroundColor:  "#000", padding: 5, borderRadius: 5}}>  
                    <QR UCFID = {UCFID}></QR>
                </View>
            </Card>
        </>
    )
}

const styles = StyleSheet.create({
    IDcard:{
        height: 250,
        width: 230,
        justifyContent: "center",
        alignContent: "center",
        boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
    },
})
