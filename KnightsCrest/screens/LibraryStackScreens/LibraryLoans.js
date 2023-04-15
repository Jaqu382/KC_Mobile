import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import LibraryItem from "../../components/LibraryItem";
import { FlatList } from "react-native";

import React, { useEffect } from 'react';

// To reset screens
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from "react";

// Redux
import { useSelector } from "react-redux";
import { selectUser } from '../../slices/userSlice';

// Global styles
import { useTheme } from '../../ThemeContext';
import { createGlobalStyles } from "../../styles/globalStyles";



export default function LibraryLoans({navigation}) {

  const theme = useTheme();
  const globalStyles = createGlobalStyles(theme);

      // Reset to menu whenever we go to another tab.
      useFocusEffect(
        useCallback(() => {
          const unsubscribe = navigation.addListener('blur', () => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Library Menu' }],
            });
          });
      
          return () => {
            // Clean up the listener when the component is unmounted or the tab is blurred
            unsubscribe();
          };
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
      <SafeAreaView style={globalStyles.container}>
          <View>
            <Text style={globalStyles.titleText}>Loans</Text>
          </View>
          <View>
            {!loans[0].empty ? (
              <View style = {{maxHeight:400}}>
              <FlatList
                data={loans}
                renderItem={renderItem}
                keyExtractor={(item) => item.item_id.toString()}
              />
              </View>
            ) : (
              <Text>No loans</Text>
            )}
          </View>

      </SafeAreaView>
    );
  }