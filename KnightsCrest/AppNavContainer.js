import React, {useState} from 'react';
import { 
  NavigationContainer } from '@react-navigation/native';
import LoginNav from './navigation/LoginNav';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function AppNavContainer() {

  return(
    <SafeAreaProvider>
      <NavigationContainer>
        <LoginNav/>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}