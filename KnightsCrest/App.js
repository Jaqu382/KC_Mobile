import 'react-native-gesture-handler';
import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { View } from 'react-native';

// Storage
import store from './store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';

// Components
import Login from './screens/LoginStackScreen/Login';
import HomeTabs from './navigation/HomeTabs';
import SettingsScreen from './screens/SettingsScreens/SettingsScreen';

// Buttons
import SettingsButton from './components/SettingsButton';
import LogoutButton from './components/LogoutButton';

// Theme
import { AppThemeProvider } from './ThemeContext';

// Fonts
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync()
      .then(() => {
        checkLoginStatus();
      })
      .catch(console.warn);
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

  const loadFonts = async () => {
    await Font.loadAsync({
      'GothamBold': require('./assets/fonts/GothamBold.ttf'),
      'GothamBook': require('./assets/fonts/GothamBook.ttf'),
      'GothamMedium': require('./assets/fonts/GothamMedium.ttf'),
      'Lora-Regular': require('./assets/fonts/Lora-Regular.ttf'),
      // Add more fonts if needed
    });
    setFontsLoaded(true);
    SplashScreen.hideAsync();
  };

  if (!fontsLoaded) {
    loadFonts();
    return null;
  }

  return (
    <Provider store={store}>
      <AppThemeProvider>
        <NavigationContainer>
          {isLoggedIn ? (
            <Stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: '#FFC904' },
                headerTitleStyle: {fontFamily: 'Lora-Regular', fontWeight: }
              }}
              
            >
              <Stack.Screen
                name="Knights Crest"
                component={HomeTabs}
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
            </Stack.Navigator>
          ) : (
            <Stack.Navigator>
              <Stack.Screen name="Login" options={{ headerShown: false }}>
                {(props) => <Login {...props} onLoginSuccess={handleLoginSuccess} onLogout={handleLogout} />}
              </Stack.Screen>
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </AppThemeProvider>
    </Provider>
  );
}

export default App;