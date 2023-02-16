import { StyleSheet, Text, View, TextInput, Linking, Image, SafeAreaView} from 'react-native';
import { Card } from '@rneui/themed';
import { useState } from 'react';
import { Button } from '@rneui/base';
import sharedStyles from '../../SharedStyle';

export default function Login({navigation}) {

    const [accountFocus, setAccountFocus] = useState(false);
    const accountIsFocus = accountFocus ? styles.loginInputFocus : styles.loginInput
    const [PasswordFocus, setPasswordFocus] = useState(false);
    const passwordIsFocus = PasswordFocus ? styles.loginInputFocus : styles.loginInput;
    
    return (
      <SafeAreaView style={styles.container}>
        <View >
        <Image style = {styles.tabHorizontal} source={require("../../assets/images/TabLockup.png")} alt={'University of Central Florida'}/>
          <Card containerStyle = {styles.loginCard}>
            <View>
              <Text style ={styles.fieldTitle}>Account</Text>
                <TextInput 
                onChangeText={()=> {setAccountFocus(true)}}
                style = {accountIsFocus}
                placeholder='Username: NID or DTC-Atlas ID'
                ></TextInput>
    
              <Text style ={styles.fieldTitle}>Password</Text>
              <TextInput
                  placeholder='Password'
                  secureTextEntry={true}
                  onChangeText={()=> setPasswordFocus(true)}
                  style = {passwordIsFocus}></TextInput>
              </View>
              <View style={{paddingTop: 10}}>
                    <Button 
                    color={"#000"}
                    title = "Sign On"
                    accessibilityLabel= "Sign On"
                    onPress= {() => navigation.navigate('Main', {screen:"MainScreen"})}
                    ></Button>
              </View>
                  </Card>

        </View>                  
        <View style = {{paddingTop: 10}}>
            <Text>By signing on, you agree to the terms of the </Text>
            <Text style = {styles.hyperlink} onPress={() => Linking.openURL('https://policies.ucf.edu/')}>UCF Policies & Procedures.</Text>
        </View>
        </SafeAreaView>
        )  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginInput: {
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#fff',
      fontSize: 15,
      color: "#D4D4D4",
      boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
    },
    fieldTitle: {
      fontWeight: "bold"
    },
    loginInputFocus: {
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#fff',
      fontSize: 15,
      color: "#000",
      boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
    },
    loginCard: {
      backgroundColor: "#FDF1BC",
      boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
    },
    hyperlink: {
      color: "blue",
      textDecorationLine: "underline"
    },
    tabHorizontal: {
        width:313,
        height:76  
    }
  });