import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
import HomeScreen from "../Screens/LoginStackScreen/HomeScreen";
import KnightsCashStack from "./KnightsCashStack.js";
import LibraryStack from "./LibraryStack";

export default function HomeNav(){
  return (
    <Tab.Navigator initialRouteName = "Home" screenOptions={{headerShown: false} }>
     <Tab.Screen name="Home" component={HomeScreen} />
     <Tab.Screen name ="KnightsCash" component={KnightsCashStack}/>
     <Tab.Screen name="Library" component={LibraryStack}/>
    </Tab.Navigator>
  );
};
