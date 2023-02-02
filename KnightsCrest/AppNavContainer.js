import { NavigationContainer } from '@react-navigation/native';
import LoginNav from './Navigation/LoginNav';
import DrawerNav from './Navigation/DrawerNav';
import HomeNav from './Navigation/HomeNav';

export default function AppNavContainer() {
  return(
  <NavigationContainer>
    <DrawerNav></DrawerNav>
  </NavigationContainer>)
}