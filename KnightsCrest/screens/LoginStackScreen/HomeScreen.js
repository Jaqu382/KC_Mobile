import {StyleSheet, View, Animated, SafeAreaView} from 'react-native';
import { useRef, useState } from 'react'; 

// Components
import IDfront from '../../components/IDfront';
import IDback from '../../components/IDback';
import PersonalInfoCard from '../../components/PersonalInfoCard';
import YellowButton from '../../components/YellowButton';

// Redux
import { useSelector } from "react-redux";
import { selectUser } from '../../slices/userSlice';

// Theme and styles
import { useTheme } from '../../ThemeContext';
import { createGlobalStyles } from '../../styles/globalStyles';

import { Text } from 'react-native-elements';

export default function HomeScreen({navigation, route}) {

  const theme = useTheme();
  const globalStyles = createGlobalStyles(theme);

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
    <SafeAreaView style={globalStyles.container}>
        <View>
          <Text style={globalStyles.titleText}>Welcome, {user.firstName} {user.lastName}</Text>
        </View>
      <View>
        <Animated.View style={[{transform: [{rotateY: interpolateFront}]}, styles.hidden]}>
          <IDfront
            isFlipped={isFlipped}
            profile={user.profilePicture}
            nid = {user.nid}
            fName={user.firstName}
            lName={user.lastName}
            pronoun={user.pronoun}
            kCashNum={user.knightsCashAccount}
            libNumber={user.libraryAccount}
            UCFID={user.ucfId}
            caste={user.caste}
            expDate={user.expirationDate}/>
        </Animated.View>
        <Animated.View style={[{transform: [{rotateY: interpolateBack}]}, styles.back, styles.hidden]}>
          <IDback isFlipped={isFlipped}/>
        </Animated.View>
      </View>
      <View style={{paddingTop: 10}}>
        <YellowButton title="View QR Code" onPress={handleFlip}></YellowButton>
      </View>
    </SafeAreaView>
  );
}
  const styles = StyleSheet.create({
    hidden: {
      backfaceVisibility: 'hidden',
    },
    back: {
      position: 'absolute',
      top: 0
    },
});