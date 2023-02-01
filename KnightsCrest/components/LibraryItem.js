import { Card } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";
import { format } from "date-fns";


export default function LibraryItem(props){
    const {itemID, item, dueDate, pickupLocation} = props;

    // Format date
    console.log(dueDate)
    let myDate = new Date(dueDate);
    let formatDate = format(myDate, 'mm/dd/yyyy')

    return(
        <View>
            <Card containerStyle = {styles.loanItemCard}>
                <View>
                    <Text>[{itemID}]</Text>
                </View>
                <View>
                    <Text>{item}</Text>
                </View>
                <View>
                    <Text>
                        Due: {formatDate}
                    </Text>
                        Pickup: {pickupLocation}
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    loanItemCard: {
        width: 300,
        height:100,
        backgroundColor: "#FDF1BC",
        shadowColor: "#000000",
        boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)"
      }})
