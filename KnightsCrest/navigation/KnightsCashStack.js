import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import KnightsCashMain from '../screens/KnightsCashScreens/KnightsCashMain';
import KnightsCashBalance from "../screens/KnightsCashScreens/KnightsCashBalance";
import KnightsCashAdd from "../screens/KnightsCashScreens/KnightsCashAdd";

const  CashStack = createStackNavigator();
export default function KnightsCashStack() {
    return(
          <CashStack.Navigator screenOptions={{headerShown: false}}>
            <CashStack.Screen name="KnightsCashMenu" component= {KnightsCashMain}/>
            <CashStack.Screen name="Balance" component= {KnightsCashBalance}/>
            <CashStack.Screen name="Add" component={KnightsCashAdd}/>
          </CashStack.Navigator>
          );
}