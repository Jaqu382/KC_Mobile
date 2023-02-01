import { Card } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";
import format from "date-fns/format";



export default function LibraryReqItem(props){

    const {requestedItem, requestDate, pickupLocation} = props

    let myDate = new Date(requestDate)  ;
    let formatDate = format(myDate, 'mm/dd/yyyy')
    
    return(
        <View>
            <Card containerStyle = {styles.reqItem}>
                <View>
                    <Text>{requestedItem}</Text>
                </View>
                <View>
                    <Text>Requested on: {formatDate}</Text>
                </View>
                <View>
                    <Text>
                        Pickup at: {pickupLocation}
                    </Text>
                        
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    reqItem: {
        width: 300,
        height:100,
        backgroundColor: "#FDF1BC",
        shadowColor: "#000000",
        boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)"
      }})