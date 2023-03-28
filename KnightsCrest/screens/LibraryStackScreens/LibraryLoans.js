import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import LibraryItem from "../../components/LibraryItem";
import { FlatList } from "react-native";

// Redux
import { useSelector } from "react-redux";
import { selectUser } from '../../slices/userSlice';


export default function LibraryLoans({navigation}) {

    const user = useSelector(selectUser);
    const loans = user.libraryLoans;
  
    const renderItem = ({ item }) => (
      <LibraryItem 
        item={item.item_name}
        itemID={item.item_id} 
        dueDate={item.due_date}
        pickupLocation={item.pick_up_location}
      />
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <View>
        <View>
          <Text>Loans</Text>
        </View>
        <View style={styles.loansContainer}>
        {loans.length > 0 ? (
          <FlatList
          data={loans}
          renderItem={renderItem}
          keyExtractor={(item) => item.item_id.toString()}
          />
  ) : (
    <Text>No loans</Text>
  )}
</View></View>
      </SafeAreaView>
    );  
  }
  const styles = StyleSheet.create({
    container: {
      paddingTop: 10,
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    loansContainer: {
      alignItems: "center",
      justifyContent: "center",
    },
  });