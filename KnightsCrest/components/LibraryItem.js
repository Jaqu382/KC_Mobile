import { Card } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";
import { format } from "date-fns";

// Theme
import { useTheme } from '../ThemeContext';
import { createGlobalStyles } from '../styles/globalStyles';


export default function LibraryItem(props){
    const {itemID, item, dueDate, pickupLocation} = props;

    const theme = useTheme();
    const globalStyles = createGlobalStyles(theme);


    // Format date
    let myDate = new Date(dueDate);
    let formatDate = format(myDate, 'MM/dd/yyyy')

    return(
        <View>
            <Card containerStyle = {globalStyles.card}>
                <View>
                    <Text style = {globalStyles.text}>[{itemID}]</Text>
                </View>
                <View>
                    <Text style = {globalStyles.text}>{item}</Text>
                </View>
                <View>
                    <Text style = {globalStyles.bodyText}>
                        Due: {formatDate}
                    </Text>
                    <Text style = {globalStyles.bodyText}>
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
