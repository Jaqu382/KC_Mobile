import { Card } from "@rneui/themed";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import LibraryReqItem from "../../components/LibraryReqItem";

import React, { useEffect } from 'react';

// Redux
import { useSelector } from "react-redux";
import { selectUser } from '../../slices/userSlice';

// Theme
import { useTheme } from '../../ThemeContext';
import { createGlobalStyles } from '../../styles/globalStyles';

export default function LibraryReq({ navigation, route }) {

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
        <View style={{ maxHeight: libraryRequests.length * 200 }}>
        <FlatList
          data={libraryRequests}
          renderItem={({ item }) => (
            <LibraryReqItem
              requestedItem={item.title + " / " + item.author}
              requestDate={item.request_date}
              pickupLocation={item.pick_up_location}
              style={{ maxHeight: libraryRequests.length * 200 }}
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