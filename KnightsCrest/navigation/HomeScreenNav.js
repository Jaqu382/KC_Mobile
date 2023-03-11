import HomeScreen from '../screens/LoginStackScreen/HomeScreen';
import LibraryStack from './LibraryStack';
import KnightsCashStack from './KnightsCashStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function HomeScreenNav({ navigation, route }) {
    return (
      <Tab.Navigator initialRouteName="Home" useLegacyImplementation={false} screenOptions={{headerShown: false}}>
        <Tab.Screen name="Library" component={LibraryStack}/>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Knights Cash" component={KnightsCashStack}/>
      </Tab.Navigator>
    );
  }