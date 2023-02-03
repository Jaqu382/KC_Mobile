import { Card } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";
import format from "date-fns/format";



export default function LibraryReqItem(props){

    const {requestedItem, requestDate, pickupLocation} = props

    let myDate = new Date(requestDate)  ;
    let formatDate = format(myDate, 'MM/dd/yyyy')
    
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
        boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" 
      }})