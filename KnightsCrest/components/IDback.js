import { View, Text, StyleSheet} from "react-native";
import { Card } from "@rneui/base";

import QR from "./QR";


import sharedStyles from "../SharedStyle";
export default function IDback(props){
    const {user} = props;
    return(
            <Card containerStyle = {styles.IDcard}>
                <View style={{
                    backgroundColor: "white",
                    borderRadius: 10,
                    padding: 15,
                    borderWidth: 3,
                    borderColor: "black",
                    }}>
                    <View>
                        <Text style = {[sharedStyles.bodyText, {fontWeight:"bold"}]}>QR CODE</Text>
                    </View>
                
                <View style = {{backgroundColor:  "#000", padding: 5, borderRadius: 5}}>  
                    <QR UCFID = {user}></QR>
                </View>
                </View>

            </Card>
    )
}
const styles = StyleSheet.create({
    IDcard: {
        backgroundColor:"#FFC904",
        width: 230,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        }}


    })