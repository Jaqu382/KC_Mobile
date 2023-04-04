import HomeScreen from '../screens/LoginStackScreen/HomeScreen';
import LibraryStack from './LibraryStack';
import KnightsCashStack from './KnightsCashStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();
const HomeIcon = () => <Image source={require('./path/to/homeIcon.png')} style={{ width: 24, height: 24 }} />;
const Tab2Icon = () => <Image source={require('./path/to/tab2Icon.png')} style={{ width: 24, height: 24 }} />;
const Tab3Icon = () => <Image source={require('./path/to/tab3Icon.png')} style={{ width: 24, height: 24 }} />;

export default function HomeTabs({ navigation, route }) {
    return (
      <Tab.Navigator
      useLegacyImplementation={false}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
        backgroundColor: '#ffc904',
        },
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'black',
      }}
>
  <Tab.Screen name="Home" component={HomeScreen} />
  <Tab.Screen name="Library" component={LibraryStack} />
  <Tab.Screen name="Knights Cash" component={KnightsCashStack} />
</Tab.Navigator>
    );
  }
