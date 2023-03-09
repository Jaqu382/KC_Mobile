import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import LibraryItem from "../../components/LibraryItem";

export default function LibraryLoans({navigation, route}){
    // For testing
    let item = "DTC Alienware Laptop";
    let itemID = 1;
    let dueDate = "2022-02-10T09:00:00" 
    let pickupLocation = "UCF Downtown Tech Lending"
    return(
        <SafeAreaView style = {styles.container}>
                <View>
                    <Text>Loans</Text>
                </View>
                    <LibraryItem 
                    item = {item}
                    itemID = {itemID} 
                    dueDate = {dueDate}
                    pickupLocation = {pickupLocation} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          },
    }
)