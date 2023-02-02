import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../Screens/LoginStackScreen/Login';
import BottomNav from './HomeNav';


const LoginStack = createStackNavigator();
export default function LoginNav() {
    return(
          <LoginStack.Navigator initialRouteName = "Login" screenOptions={{headerShown: false} }>
            <LoginStack.Screen name="Login" component={Login} />
          </LoginStack.Navigator>
          );


}