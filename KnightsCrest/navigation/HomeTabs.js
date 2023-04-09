import HomeScreen from '../screens/LoginStackScreen/HomeScreen';
import LibraryStack from './LibraryStack';
import KnightsCashStack from './KnightsCashStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

//Tab components
const HomeIcon = () => <Image source={require('../assets/images/homeButton.png')} style={{ width: 24, height: 24 }} />;
const LibraryIcon = () => <Image source={require('../assets/images/book.png')} style={{ width: 24, height: 24 }} />;
const KCashIcon = () => <Image source={require('../assets/images/walletIcon.png')} style={{ width: 24, height: 24 }} />;

export default function HomeTabs({ navigation, route }) {
    return (
      <Tab.Navigator
      useLegacyImplementation={false}
      initialRouteName="Home Screen"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
        backgroundColor: '#ffc904',
        },tabBarShowLabel: false,
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'black',
      }}
> 
  <Tab.Screen name="Library" component={LibraryStack} 
    options={{
      tabBarIcon: ({ color, size }) => (
      <LibraryIcon />
      ),
      }}/>
    <Tab.Screen name="Home Screen" component={HomeScreen}
  options={{
  tabBarIcon: ({ color, size }) => (
  <HomeIcon />
  ),
  }}
   />
  <Tab.Screen name="Knights Cash" component={KnightsCashStack} 
    options={{
      tabBarIcon: ({ color, size }) => (
      <KCashIcon />
      ),
      }}/>
</Tab.Navigator>
    );
  }
