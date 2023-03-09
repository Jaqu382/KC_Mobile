import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Login from '../Screens/LoginStackScreen/Login';
import HomeScreen from '../Screens/LoginStackScreen/HomeScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function loginNav() {
return (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Home" component={HomeScreenNav}/>
  </Stack.Navigator>
);}

function HomeScreenNav({ navigation, route }) {
  return (
    <Tab.Navigator initialRouteName="Home" useLegacyImplementation={false}>
      <Tab.Screen name="HomeScreen" component={HomeScreen}/>
    </Tab.Navigator>
  );
}