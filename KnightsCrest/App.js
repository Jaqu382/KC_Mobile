import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from './screens/Login';
import Home from './screens/Home';


const Stack = createStackNavigator();

function App() {
  return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
  </NavigationContainer>)
}

export default App;