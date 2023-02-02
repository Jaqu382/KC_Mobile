import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNav from "./HomeNav"

const Drawer = createDrawerNavigator();

export default function DrawerNav(){
  return (
    <Drawer.Navigator initialRouteName="Home" useLegacyImplementation={false}>
      <Drawer.Screen name="Home" component={HomeNav} />
    </Drawer.Navigator>
  );
}

