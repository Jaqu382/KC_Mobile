import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import LibraryItem from "../../components/LibraryItem";

export default function LibraryLoans(){
    return(
        <SafeAreaView style = {styles.container}>
                <View>
                    <Text>Loans</Text>
                </View>
                    <LibraryItem 
                    item = "DTC Alienware Laptop" 
                    itemID = {1} dueDate = "2022-02-10T09:00:00" 
                    pickupLocation = "UCF Downtown Tech Lending" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
          },
    }
)