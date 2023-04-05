import { Card } from "@rneui/themed";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import LibraryReqItem from "../../components/LibraryReqItem";

import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect } from 'react';


// Redux
import { useSelector } from "react-redux";
import { selectUser } from '../../slices/userSlice';


export default function LibraryReq({navigation, route}){
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