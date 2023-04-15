import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { Card } from "react-native-elements";
import { useDispatch, useSelector } from 'react-redux';
import { setFontSize } from '../../slices/fontSizeSlice'
import { toggleDarkMode } from '../../slices/darkModeSlice';
import SupportLink from "../../components/SupportLink";

// Global styles
import { useTheme } from '../../ThemeContext';
import { createGlobalStyles } from "../../styles/globalStyles";
import { SafeAreaView } from 'react-native-safe-area-context';

const FontSizeButton = ({ size, onPress, isActive }) => (
  <TouchableOpacity onPress={() => onPress(size)} style={isActive ? styles.activeFontSizeButton : styles.fontSizeButton}>
    <Text style={{ fontSize: size }}>Aa</Text>
  </TouchableOpacity>
);

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const globalStyles = createGlobalStyles(theme);
  const appFontSize = useSelector((state) => state.fontSize.fontSize);
  const isDarkModeEnabled = useSelector((state) => state.darkMode.isEnabled);

  const handleFontSizeChange = (size) => {
    dispatch(setFontSize(size));
  };

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <View>
        <Text style={globalStyles.titleText}>Settings and Support</Text>
      </View>
      {/* Font Size Settings */}
      
        <Text style={globalStyles.subheadingText}>Font Size Settings</Text>
        <View style={styles.fontSizeContainer}>
      <FontSizeButton size={16} onPress={handleFontSizeChange} isActive={appFontSize === 16} />
      <FontSizeButton size={18} onPress={handleFontSizeChange} isActive={appFontSize === 18} />
      <FontSizeButton size={20} onPress={handleFontSizeChange} isActive={appFontSize === 20} />
      <FontSizeButton size={22} onPress={handleFontSizeChange} isActive={appFontSize === 22} />
      <FontSizeButton size={24} onPress={handleFontSizeChange} isActive={appFontSize === 24} />
    </View>
    
      <View style = {globalStyles.divider}></View>
      {/* Dark Mode */}
     
        <Text style={globalStyles.subheadingText}>Dark Mode</Text>
        
        <Switch 
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkModeEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={handleDarkModeToggle}
          value={isDarkModeEnabled}
        />
      
      <View style = {globalStyles.divider}></View>
      {/* Support Links */}
      
        <Text style={globalStyles.subheadingText}>Knights Crest Support</Text>
        <View>
          <SupportLink
            heading="NID password Self-Service Reset Tool"
            supportText="Reset your NID password"
            link="https://mynid.ucf.edu/pages/NidCheck.aspx"
          />
          <SupportLink
            heading="Support Center"
            supportText="Search knowledge base and submit a ticket."
            link="https://ucf.service-now.com/ucfit"
          />
          <SupportLink
            heading="Call the support center"
            supportText="407-823-5117"
            link="tel:${407-823-5117}"
          />
          <SupportLink
            heading="Email Support Center"
            supportText="itsupport@ucf.edu"
            link="mailto:itsupport@ucf.edu"
          />
        </View>
  
      <View style = {globalStyles.divider}></View>
      
        <Text style={globalStyles.subheadingText}>Support Center Hours</Text>
        <Text style = {globalStyles.smallText}>7:00AM - 10:00PM, Monday - Friday</Text>
      
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  fontSizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  fontSizeButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: "#fff",
    borderRadius: 4,
    marginHorizontal: 5,
  },
  activeFontSizeButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#33b249',
    borderRadius: 4,
    marginHorizontal: 5,
    backgroundColor: '#33b249',
  },
});
    
    export default SettingsScreen;