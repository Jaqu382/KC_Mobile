import { Card } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";
import { format } from "date-fns";


export default function LibraryItem(props){
    const {itemID, item, dueDate, pickupLocation} = props;

    // Format date
    let myDate = new Date(dueDate);
    let formatDate = format(myDate, 'MM/dd/yyyy')

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
                    <Text>
                        Pickup: {pickupLocation}
                    </Text>
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
        boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"  
      }})
