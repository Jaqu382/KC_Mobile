import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import LibraryItem from "../../components/LibraryItem";
import { FlatList } from "react-native";

// Redux
import { useSelector } from "react-redux";
import { selectUser } from '../../slices/userSlice';


export default function LibraryLoans({navigation, route}) {

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
          <Text>Loans</Text>
        </View>
        {loans.length > 0 ? (
          <FlatList
            data={loans}
            renderItem={renderItem}
            keyExtractor={(item) => item.item_id.toString()}
          />
        ) : (
          <Text>No loans</Text>
        )}
      </SafeAreaView>
    );
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