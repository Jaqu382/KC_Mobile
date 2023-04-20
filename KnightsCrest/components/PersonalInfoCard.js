import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// React redux
import { useSelector } from "react-redux";
import { selectUser } from '../slices/userSlice';

export default function PersonalInfoCard() {
  const user = useSelector(selectUser);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={[styles.bold]}>{user.caste}</Text>
      </View>
      <View style={styles.row}>
        <Text>
          {user.firstName} {user.lastName}{' '}
        </Text>
        <Image
          style={styles.icon}
          source={require('../assets/images/studentIcon.png')}
          alt="Student icon"
        />
      </View>
      <View style={styles.row}>
        <Text >{user.libraryAccount} </Text>
        <Image
          style={styles.icon}
          source={require('../assets/images/libraryCard.png')}
          alt="Library book icon"
        />
      </View>
      <View style={styles.row}>
        <Text>{user.knightsCashAccount} </Text>
        <Image
          style={styles.icon}
          source={require('../assets/images/knightsCashIcon.png')}
          alt="Knights Cash icon"
        />
      </View>
      <View style={styles.row}>
        <Text>UCFID: {user.ucfId} </Text>
        <Image
          style={styles.icon}
          source={require('../assets/images/idIcon.png')}
          alt="Id icon"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
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
  row: {
    flexDirection: 'row',
    padding: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  icon: {
    width: 25,
    height: 25,}})