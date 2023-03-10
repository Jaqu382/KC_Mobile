import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../screens/LoginStackScreen/Login';
import HomeScreenNav from './HomeScreenNav';


const Stack = createStackNavigator();

export default function loginNav() {
return (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Home" component={HomeScreenNav}/>
  </Stack.Navigator>
);}

