import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
import HomeScreen from "../Screens/LoginStackScreen/HomeScreen";
import KnightsCashStack from "./KnightsCashStack.js";
import LibraryStack from "./LibraryStack";

export default function HomeNav(){
  return (
    <Tab.Navigator initialRouteName = "MainScreen" screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor:"#ffc904",
        padding: 20
      }
      } }>
    <Tab.Screen name ="KnightsCash" component={KnightsCashStack}/>
     <Tab.Screen name="MainScreen" component={HomeScreen} />
     <Tab.Screen name="Library" component={LibraryStack}/>
    </Tab.Navigator>
  );
};
