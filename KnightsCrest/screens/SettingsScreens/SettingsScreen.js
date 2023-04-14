import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setFontSize } from '../../slices/fontSizeSlice'
import { toggleDarkMode } from '../../slices/darkModeSlice';
import SupportLink from "../../components/SupportLink";

const FontSizeButton = ({ size, onPress }) => (
  <TouchableOpacity onPress={() => onPress(size)} style={styles.fontSizeButton}>
    <Text style={{ fontSize: size }}>{size}</Text>
  </TouchableOpacity>
);

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const appFontSize = useSelector((state) => state.fontSize.fontSize);
  const isDarkModeEnabled = useSelector((state) => state.darkMode.isEnabled);

  const handleFontSizeChange = (size) => {
    dispatch(setFontSize(size));
  };

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <View style={styles.container}>
      {/* Font Size Settings */}
      <Text style={[styles.title, { fontSize: appFontSize }]}>
        Font Size Settings
      </Text>
      <View style={styles.fontSizeContainer}>
        <FontSizeButton size={14} onPress={handleFontSizeChange} />
        <FontSizeButton size={18} onPress={handleFontSizeChange} />
        <FontSizeButton size={22} onPress={handleFontSizeChange} />
      </View>

      {/* Dark Mode */}
      <Text style={[styles.title, { fontSize: appFontSize }]}>
        Dark Mode
      </Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isDarkModeEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={handleDarkModeToggle}
        value={isDarkModeEnabled}
      />

      {/* Support Links */}
      <Text style={[styles.title, { fontSize: appFontSize }]}>
        Knights Crest Support
      </Text>
      <View style={styles.divider} />
      <View>
        <View style = {{paddingTop: 10}}>
        <SupportLink
          heading="NID password Self-Service Reset Tool"
          supportText="Reset your NID password"
          link="https://mynid.ucf.edu/pages/NidCheck.aspx"
        /></View>
        <View style = {{paddingTop: 10}}>
        <SupportLink
          heading="Support Center"
          supportText="Search knowledge base and submit a ticket."
          link="https://ucf.service-now.com/ucfit"
        /></View>
        <View style = {{paddingTop: 10}}>
        <SupportLink
          heading="Call the support center"
          supportText="407-823-5117"
          link="tel:${407-823-5117}"
        /></View>
        <View style = {{paddingTop: 10}}>
        <SupportLink
          heading="Email Support Center"
          supportText="itsupport@ucf.edu"
          link="mailto:itsupport@ucf.edu"
        /></View>
      </View>
      <View style={styles.divider} />
      <View>
        <Text>Support Center Hours</Text>
        <Text>7:00AM - 10:00PM, Monday - Friday</Text>
      </View>
    </View>
  );
};

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
  divider: {
    borderBottomColor: '#707070',
    borderBottomWidth: 1,
    paddingTop: 10,
    },
    });
    
    export default SettingsScreen;