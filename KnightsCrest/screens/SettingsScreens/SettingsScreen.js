import React from "react";
import { useState } from "react"
import { Card } from '@rneui/themed';
import { View, Text, SafeAreaView, Switch, StyleSheet, Pressable } from "react-native"
import sharedStyles from "../../SharedStyle";



const FontSizeButton = ({ size, onPress }) => (
    <TouchableOpacity onPress={() => onPress(size)} style={styles.fontSizeButton}>
      <Text style={{ fontSize: size }}>{size}</Text>
    </TouchableOpacity>
  );
  

export default function SettingsScreen(){
    const [appFontSize, setAppFontSize] = useState(14);

    const handleFontSizeChange = (size) => {
      setAppFontSize(size);
    };
    return (
        <View style={styles.container}>
          <Text style={[styles.title, { fontSize: appFontSize }]}>
            Font Size Settings
          </Text>
          <View style={styles.fontSizeContainer}>
            <FontSizeButton size={14} onPress={handleFontSizeChange} />
            <FontSizeButton size={18} onPress={handleFontSizeChange} />
            <FontSizeButton size={22} onPress={handleFontSizeChange} />
          </View>
        </View>
      );

/*    
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
    )*/
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      marginBottom: 20,
    },
    fontSizeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    fontSizeButton: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 4,
      marginHorizontal: 5,
    },
  });