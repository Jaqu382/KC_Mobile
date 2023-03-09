import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LibraryMain from '../screens/LibraryStackScreens/LibraryMain';
import LibraryFees from '../screens/LibraryStackScreens/LibraryFees';
import LibraryLoans from '../screens/LibraryStackScreens/LibraryLoans';
import LibraryReq from '../screens/LibraryStackScreens/LibraryReq';

const Stack = createStackNavigator();
export default function LibraryStack() {
    return(
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="LibraryMenu" component={LibraryMain} />
            <Stack.Screen name="Loans" component={LibraryLoans} />
            <Stack.Screen name="Requests" component={LibraryReq} />
            <Stack.Screen name="Fees" component={LibraryFees} />        
          </Stack.Navigator>
          );
}