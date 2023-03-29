import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setFontSize } from './path/to/fontSizeSlice';

const FontSizeButton = ({ size, onPress }) => (
  <TouchableOpacity onPress={() => onPress(size)} style={styles.fontSizeButton}>
    <Text style={{ fontSize: size }}>{size}</Text>
  </TouchableOpacity>
);

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const appFontSize = useSelector((state) => state.fontSize.fontSize);

  const handleFontSizeChange = (size) => {
    dispatch(setFontSize(size));
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
});

export default SettingsScreen;