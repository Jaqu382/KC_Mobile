import { Card } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";
import format from "date-fns/format";

// Theme
import { useTheme } from '../ThemeContext';
import { createGlobalStyles } from '../styles/globalStyles';


export default function LibraryReqItem(props){

    const {requestedItem, requestDate, pickupLocation} = props
    
    const theme = useTheme();
    const globalStyles = createGlobalStyles(theme);

    let myDate = new Date(requestDate)  ;
    let formatDate = format(myDate, 'MM/dd/yyyy')

    return(
        <View>
            <Card containerStyle = {globalStyles.card}>
                <View>
                    <Text style = {globalStyles.text}>{requestedItem}</Text>
                </View>
                <View>
                    <Text style = {globalStyles.bodyText}>Requested on: {formatDate}</Text>
                </View>
                <View>
                    <Text style = {globalStyles.bodyText}>
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