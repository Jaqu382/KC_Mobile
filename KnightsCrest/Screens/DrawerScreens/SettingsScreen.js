import { useState } from "react"
import { Card } from '@rneui/themed';
import { View, Text, SafeAreaView, StyleSheet } from "react-native"

export default function SettingsScreen(){
    let [fontSize, setFontSize] = useState(12);
    return(
        <SafeAreaView style = {styles.container}>
            <View>
                <Text>Settings</Text>
            </View>
            <View>
                <View>
                    <Text style = {sharedStyles.subHeadingText}>Font Size</Text>
                </View>
                <View style = {{flexDirection: "row"}}>
                <Pressable 
                style = {[styles.fontSizeButton, {borderTopLeftRadius: 5, borderBottomLeftRadius: 5}]}>
                    <Text>A</Text>
                </Pressable>
                <Pressable 
                style = {styles.fontSizeButton}>
                    <Text>A</Text>
                </Pressable>
                <Pressable 
                style = {styles.fontSizeButton}>
                    <Text>A</Text>
                </Pressable>
                <Pressable 
                style = {styles.fontSizeButton}>
                    <Text>A</Text>
                </Pressable>
                <Pressable 
                style = {[styles.fontSizeButton, {borderTopRightRadius: 5, borderBottomRightRadius: 5}]}>
                    <Text>A</Text>
                </Pressable>
                </View>
            </View>
            <View>
                <Text>Accessibility</Text>
                <View>
                    <Card containerStyle = {}>
                        <View>
                            <Text>Turn on Dark Mode</Text>
                        </View>
                    </Card>
                </View>
            </View>
            <View style={styles.divider}/>
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
    divider: {
    borderBottomColor: '#707070', 
    borderBottomWidth: 1, 
    paddingTop: 10
    },
    darkModeContainer: {
        boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" 
    }})