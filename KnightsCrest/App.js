import 'react-native-gesture-handler';
import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'
import { View } from 'react-native';

// Storage
import store from './store'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';

// Components
import Login from './screens/LoginStackScreen/Login';
import HomeTabs from './navigation/HomeTabs';
import HomeScreen from './screens/LoginStackScreen/HomeScreen';
import SettingsScreen from './screens/SettingsScreens/SettingsScreen';

// Buttons
import SettingsButton from './components/SettingsButton';
import LogoutButton from './components/LogoutButton';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
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

  const navigateToSettings = (navigation) => {
    navigation.navigate('Settings');
  };

  const Stack = createStackNavigator();

  return(
    <Provider store={store}>
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#FFC904", },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <View style={{ flexDirection: 'row' }}>
                  <SettingsButton onPress={() => navigateToSettings(navigation)} />
                  <LogoutButton onPress={handleLogout} />
                </View>
              ),
            })}
          />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="HomeTabs" component={HomeTabs} />
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