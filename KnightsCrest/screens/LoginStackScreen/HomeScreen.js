import {StyleSheet, View, Animated, SafeAreaView} from 'react-native';
import { useRef, useState } from 'react'; 

// Componants
import IDfront from '../../components/IDfront';
import IDback from '../../components/IDback';
import PersonalInfoCard from '../../components/PersonalInfoCard';
import YellowButton from '../../components/YellowButton';


// Redux
import { useSelector } from "react-redux";
import { selectUser } from '../../slices/userSlice';


export default function HomeScreen({navigation, route}) {

  // Grab user from redux
  const user = useSelector(selectUser);

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
              profile={user.profilePicture}
              fName= {user.firstName}
              lName = {user.lastName}
              kCashNum = {user.knightsCashAccount}
              libNumber = {user.libraryAccount}
              UCFID = {user.ucfId}
              caste = {user.caste}
              expDate = {user.expirationDate}/>
            </Animated.View>
            <Animated.View style = {[{transform: [{rotateY: interpolateBack}]}, styles.back, styles.hidden]}>
              <IDback
                isFlipped= {isFlipped}
                user={user}/>
            </Animated.View>
      </View>
      <View style = {{paddingTop: 10}}>
        <YellowButton title= "View QR Code" onPress = {handleFlip}></YellowButton>
      </View>
      <View style ={{paddingTop: 10}}>
        <PersonalInfoCard user = {user}></PersonalInfoCard>
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
});