import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNav from "./HomeNav"
import PersonalInfoScreen from '../Screens/DrawerScreens/PersonalInfoScreen';
import HelpScreen from '../Screens/DrawerScreens/HelpScreen';
import SettingsScreen from '../Screens/DrawerScreens/SettingsScreen';
import LoginNav from './LoginNav';

const Drawer = createDrawerNavigator();

export default function DrawerNav({route, navigation}){
  return (
    <Drawer.Navigator 
    initialRouteName="Home" 
    useLegacyImplementation={false}>
      <Drawer.Screen name="Home" component={HomeNav} options={{ headerStyle:{ backgroundColor: "#ffc904"}}}/>
      <Drawer.Screen name="Personal Information" component={PersonalInfoScreen} options={{ headerStyle:{ backgroundColor: "#ffc904"}}} />
      <Drawer.Screen name="Help" component={HelpScreen} options={{ headerStyle:{ backgroundColor: "#ffc904"}}}/>
      <Drawer.Screen name="Settings" component={SettingsScreen} options={{ headerStyle:{ backgroundColor: "#ffc904"}}}/>
      <Drawer.Screen name = "Logout" component={LoginNav} options={{ headerStyle:{ backgroundColor: "#ffc904"}}}/>
    </Drawer.Navigator>
  );
}

