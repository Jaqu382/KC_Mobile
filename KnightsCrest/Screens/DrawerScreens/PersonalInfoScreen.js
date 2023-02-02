import { View, Text, SafeAreaView,StyleSheet } from "react-native"

export default function PersonalInfoScreen(){
    const fName = "Ima";
    const lName = "Knight";
    const prefName = "Ima";
    const pronouns = "She/Her/Hers";
    const UCFID = "ik123456";
    const kCashID = "6009 1921 5309 4359";
    const libID = "2 21031 52662067";

    return(
        <SafeAreaView style = {styles.container}>
        <View>
            <View>
                <Text>Personal Information</Text>
            </View>
            <View>
                <Text>Name</Text>
                <Text>{fName} {lName}</Text>
            </View>
            <View>
                <Text>Preferred Name</Text>
                <Text>{prefName}</Text>
            </View>
            <View>
                <Text>Pronouns</Text>
                <Text>{pronouns}</Text>
            </View>
            <View>
                <Text>UCFID</Text>
                <Text>{UCFID}</Text>
            </View>
            <View>
                <Text>Knights Cash ID</Text>
                <Text>{kCashID}</Text>
            </View>
            <View>
                <Text>Library ID</Text>
                <Text>{libID}</Text>
            </View>

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
    },})