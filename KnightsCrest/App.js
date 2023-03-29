import 'react-native-gesture-handler';
import * as React from 'react';
import { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'

// Storage
import store from './store'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';

// Components
import Login from './screens/LoginStackScreen/Login';
import SettingsStack from './navigation/SettingsStack';
import HomeTabs from './navigation/HomeTabs';
import HomeScreen from './screens/LoginStackScreen/HomeScreen';
import LogoutButton from './components/LogoutButton';
function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    checkLoginStatus();
  }, []);
  const checkLoginStatus = async () => {
    try {
      const loggedIn = await AsyncStorage.getItem('loggedIn');
      if (loggedIn !== null) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.log('Error checking login status:', error);
    }
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('loggedIn');
      setIsLoggedIn(false);
    } catch (error) {
      console.log('Error logging out:', error);
    }
  };
  const Stack = createStackNavigator();

  return(
    <Provider store={store}>
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator
          screenOptions={{
            headerTitleStyle:{color: '#fff'},
            headerStyle: { backgroundColor: "#000", }, // Set the header background color to yellow
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{

              headerRight: () => (
                <LogoutButton onPress={handleLogout} />
              ),
            }}
          />
          <Stack.Screen name="Settings" component={SettingsStack} />
          <Stack.Screen name="NestedTabs" component={HomeTabs} />
        </Stack.Navigator>
      ): (
          <Stack.Navigator>
            <Stack.Screen name="Login" options={{ headerShown: false }}>
              {(props) => <Login {...props} onLoginSuccess={handleLoginSuccess} onLogout = {handleLogout} />}
            </Stack.Screen>
          </Stack.Navigator>
        )}
    </NavigationContainer>
    </Provider>
  )
}

export default App;