import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LibraryMain from '../Screens/LibraryStackScreens/LibraryMain';
import LibraryFees from '../Screens/LibraryStackScreens/LibraryFees';
import LibraryLoans from '../Screens/LibraryStackScreens/LibraryLoans';
import LibraryReq from '../Screens/LibraryStackScreens/LibraryReq';

const Stack = createStackNavigator();
export default function LibraryStack() {
    return(
          <Stack.Navigator>
            <Stack.Screen name="Library" component={LibraryMain} />
            <Stack.Screen name="Loans" component={LibraryLoans} />
            <Stack.Screen name="Requests" component={LibraryReq} />
            <Stack.Screen name="Fees" component={LibraryFees} />        
          </Stack.Navigator>
          );
}