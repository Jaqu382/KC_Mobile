
import 'react-native-gesture-handler';
import * as React from 'react';
import AppNavContainer from './AppNavContainer';
import { NavigationContainer } from '@react-navigation/native';
import LoginStack from './Navigation/LoginNav';
import DrawerNav from './Navigation/DrawerNav';
import BottomNav from './Navigation/HomeNav';


function App() {
  return(
    <AppNavContainer></AppNavContainer>
  )
}

export default App;