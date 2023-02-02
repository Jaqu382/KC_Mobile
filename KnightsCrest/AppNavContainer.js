import { NavigationContainer } from '@react-navigation/native';

import DrawerNav from './Navigation/DrawerNav';


export default function AppNavContainer() {
  return(
  <NavigationContainer>
    <DrawerNav></DrawerNav>
  </NavigationContainer>)
}