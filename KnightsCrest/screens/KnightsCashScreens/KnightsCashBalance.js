import { useState } from "react";
import { View, Text, StyleSheet, Switch,SafeAreaView} from "react-native";
import { Card } from "@rneui/themed";
import Transaction from "../../components/Transaction";

// Redux
import { useSelector } from "react-redux";
import { selectUser } from '../../slices/userSlice';


export default function KnightsCashBalance({ navigation, route }) {
    // Grab user from redux
    const user = useSelector(selectUser);
    
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello World</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    subSec: {
        Height: "fit-content",
        width: 240,
        backgroundColor: "#FDF1BC",
        boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
      },
    horizontalFlex: {
        flexDirection: "row"
    },
    button: {
        width: 240,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderLeftWidth: 5,
        borderStartColor: "#ffc904",
        borderRadius: 2,
        borderColor: "#ffc904",
        elevation: 3,
        backgroundColor: 'white',
    }
    })
    