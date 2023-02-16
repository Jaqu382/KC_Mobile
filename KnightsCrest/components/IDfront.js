import { Text, View, StyleSheet, Image} from "react-native";
import { Card } from "@rneui/base";
import format from "date-fns/format";
import sharedStyles from "../SharedStyle";

export default function IDfront(props){
    const {fName, lName, kCashNum, libNumber, UCFID, caste, expDate} = props;

    let myDate = new Date(expDate)  ;
    let formatDate = format(myDate, 'MM/dd/yyyy')

    return(
        <>
            <Card containerStyle = {styles.IDcard}>
                <View style = {{backgroundColor: "black", borderRadius: 10, padding: 5 }}>
                <Card.Title style = {{color: "white"}}>{fName} {lName}</Card.Title>
                <View style = {{backgroundColor: "white", padding: 5, borderRadius: 10}}>
                <View>
                    <Image style = {styles.cardProfilePic} source = {require("../assets/images/imaKnight.jpg")} alt = "Ima Knight"/>
                </View>
               <View>
                <Text style = {sharedStyles.smallText}>{formatDate}</Text>
                </View>
                <View style = {styles.userProps}>
                    <Image style = {styles.myIcon} source = {require("../assets/images/KnightsCashNoTextLogo.png")} alt = "Knights Cash Logo"/>
                    <Text style = {sharedStyles.smallText}> {kCashNum}</Text>
                </View>
                <View style = {styles.userProps}>
                    <Text style ={[sharedStyles.smallText, {fontWeight: "bold"}]}>LIB </Text>
                    <Text style = {sharedStyles.smallText}>{libNumber}</Text>
                </View>
                <View style = {styles.userProps}>
                    <Text style = {[sharedStyles.smallText, {fontWeight: "bold"}]}>UCF ID </Text>
                    <Text style = {sharedStyles.smallText}>{kCashNum}</Text>
                </View>
                <View >
                    <Text style = {{fontFamily: "GothamBold", color: "#378805", fontWeight: "bold"}}>{caste}</Text>
                </View>
                </View>
                </View>
            </Card>
        </>
    )
}

const styles = StyleSheet.create({
    IDcard:{
        height: 250,
        width: 230,
        boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" ,
        justifyContent: "center",
        alignContent: "center",
    },
    myIcon: {
        height: 16,
        width: 12
    },
    cardProfilePic: {
        alignContent: "center",
        width: 80,
        height: 80

    },
    IDcontainer: {
        flexDirection: "row"
    },
    nameplate: {
        backgroundColor:"#000",
        margin: 0
    },
    nameText: {
    },
    userProps: {
        flexDirection: "row"
    }
})
