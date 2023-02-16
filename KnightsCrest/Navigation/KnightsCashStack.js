import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import KnightsCashMain from '../Screens/KnightsCashScreens/KnightsCashMain';
import KnightsCashAdd from '../Screens/KnightsCashScreens/KnightsCashAdd';
import KnightsCashBalance from '../Screens/KnightsCashScreens/KnightsCashBalance'

const Stack = createStackNavigator();
export default function KnightsCashStack() {
    return(
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="KnightsCashMenu" component= {KnightsCashMain}/>
            <Stack.Screen name="Balance" component= {KnightsCashBalance}/>
            <Stack.Screen name="Add" component={KnightsCashAdd}/>
          </Stack.Navigator>
          );
}