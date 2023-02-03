import React from "react";
import { useState } from "react"
import { Card } from '@rneui/themed';
import { View, Text, SafeAreaView, Switch, StyleSheet, Pressable } from "react-native"
import sharedStyles from "../../SharedStyle";

// Dark Mode imports
import { ThemeContext } from "../../AppNavContainer";
import MyDefaultTheme from "../../AppNavContainer"

export default function SettingsScreen(){

    // Set up dark mode
    const [isEnabled, setIsEnabled] = useState(false);
    const { setTheme, theme } = React.useContext(ThemeContext);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const onRadioBtnSelect = (item) => {
        let updateState = isSelected.map((isSelectedItem) => 
        isSelectedItem.id === item.id ? 
        {...isSelectedItem, selected: true}:
        {...isSelectedItem, selected: false});
        setIsSelected(updateState);
    }

    const [isSelected, setIsSelected] = useState([
        { id: 1, value: -4, name: "A", selected: false },
        { id: 2, value: -2, name: "A", selected: false },
        { id: 3, value: 0, name: "A", selected: true },
        { id: 4, value: 2, name: "A", selected: false },
        { id: 5, value: 4, name: "A", selected: false }
      ]);

    
    
    return(
        <SafeAreaView style = {sharedStyles .container}>
            <View>
                <Text style = {sharedStyles.headingText}>Settings</Text>
            </View>
            <View style = {sharedStyles.divider}></View>
            <View>
                <View>
                    <Text style = {sharedStyles.subHeadingText}>Font Size</Text>
                </View>
                <View style = {{flexDirection: "row"}}>
                {isSelected.map((item) => (
                    <Pressable 
                    key ={item.id}
                    onPress={() => onRadioBtnSelect(item)}
                    style = {item.selected ? styles.fontSizeButtonSelected: styles.fontSizeButton}>
                    <Text style = {{fontSize: 12 + item.value }}>A</Text>
                    </Pressable>))}
                </View>
            </View>
            <View>
                <View>
                    <Text style = {sharedStyles.subHeadingText}>Accessibility</Text>
                </View>
                <View>
                    <Card containerStyle = {styles.darkModeContainer}>
                        <View style = {sharedStyles.horizontalFlex}>
                            <Text style = {sharedStyles.bodyText}>Turn on Dark Mode </Text>
                            <Switch
                            trackColor={{false: '#767577', true: '#FFC904'}}
                            thumbColor = '#fff'
                            onValueChange={ () => {
                                toggleSwitch();}}
                            activeThumbColor= '#fff'
                            value={isEnabled}/>
                        </View>
                    </Card>
                </View>
            </View>
            <View style={styles.divider}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    darkModeContainer: {
        boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" 
    },
    fontSizeButtonSelected:{
        borderWidth: 1,
        borderColor: '#707070',
        backgroundColor: "#ffc904",
        padding: 15
    },
    fontSizeButton:{
        borderWidth: 1,
        borderColor: '#707070',
        padding: 15
},})