import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import LibraryItem from "../../components/LibraryItem";
import { FlatList } from "react-native";

import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect } from 'react';


// Redux
import { useSelector } from "react-redux";
import { selectUser } from '../../slices/userSlice';


export default function LibraryLoans({navigation}) {
  useFocusEffect(
    React.useCallback(() => {
      // Reset the nested stack navigator when the tab is focused
      const unsubscribe = navigation.addListener('tabPress', (e) => {
        e.preventDefault(); // Prevent the default behavior
        navigation.navigate('Library Menu'); // Navigate to the first screen of the nested stack navigator
      });

      return unsubscribe;
    }, [navigation])
  );
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