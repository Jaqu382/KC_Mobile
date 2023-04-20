import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import LibraryItem from "../../components/LibraryItem";
import { FlatList } from "react-native";

import React, { useEffect } from 'react';

// Redux
import { useSelector } from "react-redux";
import { selectUser } from '../../slices/userSlice';

// Global styles
import { useTheme } from '../../ThemeContext';
import { createGlobalStyles } from "../../styles/globalStyles";



export default function LibraryLoans({navigation}) {

  const theme = useTheme();
  const globalStyles = createGlobalStyles(theme);

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
      <SafeAreaView style={globalStyles.container}>
          <View>
            <Text style={globalStyles.titleText}>Loans</Text>
          </View>
          <View style = {{maxHeight: loans.length * 200}}>
            {!loans[0].empty ? (
              <View>
              <FlatList
                data={loans}
                renderItem={renderItem}
                keyExtractor={(item) => item.item_id.toString()}
                style = {{maxHeight: loans.length * 200}}
              />
              </View>
            ) : (
              <Text>No loans</Text>
            )}
          </View>

      </SafeAreaView>
    );
  }