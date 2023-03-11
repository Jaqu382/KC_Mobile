import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/LoginStackScreen/Login';
import HomeScreenNav from './HomeScreenNav';

const Stack = createStackNavigator();

export default function loginNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home Screen"
        component={HomeScreenNav}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}




