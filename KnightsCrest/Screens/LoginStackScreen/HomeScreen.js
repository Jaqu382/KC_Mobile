import { SafeAreaView } from 'react-native-safe-area-context';
import {StyleSheet, View, Animated, Pressable, Text, Image} from 'react-native';
import { useRef, useState } from 'react'; 
import IDfront from '../../components/IDfront';
import IDback from '../../components/IDback';  
import sharedStyles from '../../SharedStyle';

export default function HomeScreen({navigation, route}) {
  // Variables simulated as hard code for testing
  const fName= "Ima";
  const lName = "Knight";
  const kCashNum = "6009 1921 5309 4359";
  const libNumber = "2 21031 52662067" ;
  const UCFID = "1234567";
  const caste = "STUDENT";
  const expDate = "2025-03-31T00:00:00" ;
  const imagePath = "../../assets/images/imaKnight.jpg"
  // Const {fName, LName, kCashNumber, libNumber, UCFID, caste, expDate} = route.params

  // Flip animation
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
              kCashNum = {kCashNum}
              libNumber = {libNumber}
              UCFID = {UCFID}
              caste = {caste}
              expDate = {expDate}/>
            </Animated.View>
            <Animated.View style = {[{transform: [{rotateY: interpolateBack}]}, styles.back, styles.hidden]}>
              <IDback
                isFlipped= {isFlipped}
                fName= {fName}
                lName = {lName}
                kCashNum = {kCashNum}
                libNumber = {libNumber}
                UCFID = {UCFID}
                caste = {caste}
                expDate = {expDate}/>
            </Animated.View>
      </View>
      <View style = {{paddingTop: 10}}>
      <Pressable style = {styles.button} onPress = {handleFlip}>
              <Text style = {{fontFamily: "GothamBold", fontWeight:"Bold" }}>View QR code</Text>
      </Pressable>
      </View>
      <View style ={{paddingTop: 10}}>
      <View style = {styles.personalInfoContainer}>
        <View>
          <Text style = {[sharedStyles.bodyText, {fontWeight: "Bold"}]}>{caste}</Text>
        </View>
        <View style = {{padding: 5, flexDirection: "row"}}>
          <Text style = {sharedStyles.bodyText}>{fName} {lName} </Text>
          <Image style = {styles.myIcon} source = {require("../../assets/images/studentIcon.png")} alt = "Student icon "/>
        </View>
        <View style = {{padding: 5, flexDirection: "row"}}>
          <Text style = {sharedStyles.bodyText}>{libNumber} </Text>
          <Image style = {styles.myIcon} source = {require("../../assets/images/openBook.png")} alt = "Library book icon"/>
        </View>
        <View style = {{padding: 5, flexDirection: "row"}}>
          <Text style = {sharedStyles.bodyText}>{kCashNum} </Text>
          <Image style = {styles.myIcon} source = {require("../../assets/images/KnightsCashIcon.png")} alt = "Knights Cash icon"/>
        </View>
        <View style = {{padding: 5, flexDirection: "row"}}>
          <Text>UCFID: {UCFID} </Text>
          <Image style = {{width: 25, height: 16}} source = {require("../../assets/images/IDIcon.png")} alt = "Id icon"/>
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
      height: 160,
      width: 230,
      padding: 10,
      borderWidth: 1,
      borderLeftWidth: 5,
      borderStartColor: "#ffc904",
      borderRadius: 2,
      borderColor: "#ffc904",
      elevation: 3,
      backgroundColor: 'white',
      boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
    },
    myIcon: {
        height: 16,
        width: 16
    },
});