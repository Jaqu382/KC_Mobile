import { SafeAreaView } from 'react-native-safe-area-context';
import {StyleSheet, View, Animated, Pressable, Text} from 'react-native';
import { useRef, useState } from 'react'; 
import IDfront from '../../components/IDfront';
import IDback from '../../components/IDback';

export default function HomeScreen(props) {
  const {fName, lName, kCashNum, libNumber, UCFID, caste, expDate} = props

  //Create an animation for turning the card over
  const animate = useRef(new Animated.Value(0));
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => {
    Animated.timing(
      animate.current,
      {duration: 300,
      useNativeDriver: true,
      toValue: isFlipped ? 0: 180,}).start(()=>setIsFlipped(!isFlipped));
  };
  const interpolateFront = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg','180deg'],
  })
  const interpolateBack = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg','360deg'],
  })

  
  
    return (
      <SafeAreaView style = {styles.container}>
        <View>
            <Animated.View style = {[{transform: [{rotateY: interpolateFront}]}, styles.hidden]}>
              <IDfront
              isFlipped= {isFlipped}
              fName= {fName}
              lName = {lName} 
              kCashNum ={kCashNum} 
              libNumber = {libNumber} 
              UCFID = {UCFID}
              caste = {caste}
              expDate = {expDate} />
            </Animated.View>
            <Animated.View style = {[{transform: [{rotateY: interpolateBack}]}, styles.back, styles.hidden]}>
              <IDback
              UCFID = {UCFID}/>
            </Animated.View>
      </View>
      <View style = {{paddingTop: 10}}>
      <Pressable style = {styles.button} onPress = {handleFlip}>
              <Text>Scan Card</Text>
      </Pressable>
      </View>
      <View style ={{paddingTop: 10}}>
      <View style = {styles.personalInfoContainer}>
        <View>
          <Text>{caste}</Text>
        </View>
        <View>
          <Text>{fName} {lName}</Text>
        </View>
        <View>
          <Text>{libNumber}</Text>
        </View>
        <View>
          <Text>UCFID: {UCFID}</Text>
        </View>
      </View>
      </View>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      flex: 1,
      backgroundColor: "#fff",
      alignItems: 'center', 
    },
    hidden: {
      backfaceVisibility: 'hidden',
    },
    back: {
      position: 'absolute',
      top: 0

    },
    button: {
      width: 125,
      height:35,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      elevation: 3,
      backgroundColor: "#ffc904",
      boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" 
    },
    personalInfoContainer: {
      height: 150,
      width: 200,
      padding: 10,
      borderWidth: 1,
      borderLeftWidth: 5,
      borderStartColor: "#ffc904",
      borderRadius: 2,
      borderColor: "#ffc904",
      elevation: 3,
      backgroundColor: 'white',
      boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
    }



});