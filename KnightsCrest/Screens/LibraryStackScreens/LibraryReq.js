import { Card } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LibraryReqItem from "../../components/LibraryReqItem";

export default function LibraryReq(){
    //For testing
    let hasRequest = true;
    let requestedItem = "Neuromancer / Gibson, William"
    let requestDate = "2022-02-03T09:00:00" 
    let pickupLocation ="UCF Main"
    if(hasRequest){
        return(
            <SafeAreaView style = {styles.container}>
                <View>
                    <Text>Request</Text>
                    {/*Implement a flat list when data is present*/}
                    <LibraryReqItem 
                    requestedItem = {requestedItem}
                    requestDate = {requestDate}
                    pickupLocation = {pickupLocation}/>
                </View>
            </SafeAreaView>
        )}
    else
    {
        return(
            <SafeAreaView style = {styles.container}>
                <View>
                    <Card containerStyle = {styles.reqItem}>
                        <Text>No requests at this time.</Text>
                    </Card>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
      },
    reqItem: {
        width: 300,
        height:50,
        backgroundColor: "#FDF1BC",
        shadowColor: "#000000",
        boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)"
      }})