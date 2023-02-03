import React, {useState} from 'react';
import { 
  NavigationContainer } from '@react-navigation/native';
import LoginNav from './Navigation/LoginNav';

export default function AppNavContainer() {

  return(
    
    <NavigationContainer>
      <LoginNav/>
    </NavigationContainer>
  )
}