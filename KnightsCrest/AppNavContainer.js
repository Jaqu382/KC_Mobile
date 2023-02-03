import React, {useState} from 'react';
import { 
  NavigationContainer } from '@react-navigation/native';
import LoginNav from './Navigation/LoginNav';

export const ThemeContext = React.createContext();


const MyDefaultTheme = {
  dark: false,
  colors: {
    primary:  "#FDF1BC",
    secondary: "#FFF",
    background: "#FFF",
    text: '#000'
  }
}

export default function AppNavContainer() {

  const [theme, setTheme] = useState(MyDefaultTheme)

  return(
    <ThemeContext.Provider value={{theme, setTheme}}>
    <NavigationContainer theme={MyDefaultTheme}>
      <LoginNav/>
    </NavigationContainer>
  </ThemeContext.Provider>)
}