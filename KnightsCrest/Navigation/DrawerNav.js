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
    <Drawer.Navigator initialRouteName="Home" useLegacyImplementation={false}>
      <Drawer.Screen name="Home" component={HomeNav} />
      <Drawer.Screen name="Personal Information" component={PersonalInfoScreen}/>
      <Drawer.Screen name="Help" component={HelpScreen}/>
      <Drawer.Screen name="Settings" component={SettingsScreen}/>
      <Drawer.Screen name = "Logout" component={LoginNav}/>
    </Drawer.Navigator>
  );
}

