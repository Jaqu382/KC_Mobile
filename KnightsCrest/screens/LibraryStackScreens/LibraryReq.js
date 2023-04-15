import { Card } from "@rneui/themed";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import LibraryReqItem from "../../components/LibraryReqItem";

// To reset screens
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from "react";

import React, { useEffect } from 'react';

// Redux
import { useSelector } from "react-redux";
import { selectUser } from '../../slices/userSlice';

// Theme
import { useTheme } from '../../ThemeContext';
import { createGlobalStyles } from '../../styles/globalStyles';

export default function LibraryReq({ navigation, route }) {
  useFocusEffect(
    useCallback(() => {
      const unsubscribe = navigation.addListener('blur', () => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Library Menu' }],
        });
      });

      return () => {
        unsubscribe();
      };
    }, [navigation])
  );
  
  const user = useSelector(selectUser);
  const libraryRequests = user.libraryRequests;
  const theme = useTheme();
  const globalStyles = createGlobalStyles(theme);

  return (
    <SafeAreaView style={globalStyles.container}>
      
      <View style = {{marginTop: 20}}>
        <Text style={globalStyles.titleText}>Requests</Text>
      </View>
      {libraryRequests && !libraryRequests[0].empty ? (
        <View style = {{maxHeight:400}}>
        <FlatList
          data={libraryRequests}
          renderItem={({ item }) => (
            <LibraryReqItem
              requestedItem={item.title + " / " + item.author}
              requestDate={item.request_date}
              pickupLocation={item.pick_up_location}
            />
          )}
          keyExtractor={item => item.title}
        /></View>
      ) : (
        <View>
          <Card containerStyle={globalStyles.card}>
            <Text style = {globalStyles.text}>No requests at this time.</Text>
          </Card>
        </View>
      )}
    
    </SafeAreaView>
  );
}