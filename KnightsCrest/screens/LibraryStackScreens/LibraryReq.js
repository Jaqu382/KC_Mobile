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


export default function LibraryReq({navigation, route}){
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
    const libraryRequests = user.libraryRequests;
    
    if (libraryRequests.length > 0){
        return(
            <SafeAreaView style = {styles.container}>
                <View>
                    <Text>Requests</Text>
                </View>
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
                />
            </SafeAreaView>
        );
    }
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
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
    reqItem: {
        width: 300,
        height:50,
        backgroundColor: "#FDF1BC",
        shadowColor: "#000000",
        boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
    }
});