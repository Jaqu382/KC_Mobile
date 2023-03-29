import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native-elements";

const Stack = createStackNavigator();
import HomeScreen from "../screens/LoginStackScreen/HomeScreen";
const HomeStack = ({onLogout}) => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}         
        options={{
        headerRight: () => (
            <Button onPress={onLogout} title="Logout" color="#FFC904" />
          ),
        }}/>
      </Stack.Navigator>
    );
  };

  export default HomeStack;