import HomeScreen from '../screens/LoginStackScreen/HomeScreen';
import LibraryStack from './LibraryStack';
import KnightsCashStack from './KnightsCashStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

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
  <Tab.Screen name="Library" component={LibraryStack} />
  <Tab.Screen name="Knights Cash" component={KnightsCashStack} />
</Tab.Navigator>
    );
  }
