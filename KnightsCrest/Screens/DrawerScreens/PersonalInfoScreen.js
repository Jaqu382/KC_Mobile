import { View, Text, SafeAreaView,StyleSheet } from "react-native"
import sharedStyles from "../../SharedStyle";

export default function PersonalInfoScreen(){

    // Variables in place for testing 
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
                    <Text style = {[sharedStyles.headingText, {fontWeight: 'bold'}]}>Personal Information</Text>
                </View>
                <View style = {sharedStyles.divider}></View>
                <View>
                <View>
                    <Text style = {sharedStyles.subHeadingText}>Name</Text>
                    <View style = {styles.infoItem}>
                        <Text style = {sharedStyles.bodyText}>{fName} {lName}</Text>
                    </View>
                </View>
                <View>
                    <Text style = {sharedStyles.subHeadingText}>Preferred Name</Text>
                    <View style = {styles.infoItem}>
                        <Text style = {sharedStyles.bodyText}>{prefName}</Text>
                    </View>
                </View>
                <View>
                    <Text style = {sharedStyles.subHeadingText}>Pronouns</Text>
                    <View style = {styles.infoItem}>
                        <Text style = {sharedStyles.bodyText}>{pronouns}</Text>
                    </View>
                </View>
                <View>
                    <Text style = {sharedStyles.subHeadingText}>UCFID</Text>
                    <View style = {styles.infoItem}>
                        <Text style = {sharedStyles.bodyText}>{UCFID}</Text>
                    </View>
                </View>
                <View>
                    <Text style = {sharedStyles.subHeadingText}>Knights Cash ID</Text>
                    <View style = {styles.infoItem}>
                        <Text style = {sharedStyles.bodyText}>{kCashID}</Text>
                    </View>
                </View>
                <View>
                    <Text style = {sharedStyles.subHeadingText}>Library ID</Text>
                    <View style = {styles.infoItem}>
                        <Text style = {sharedStyles.bodyText}>{libID}</Text>
                    </View>
                </View>
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
    },
    infoItem: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        fontSize: 15,
        color: "#D4D4D4",
        boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
    }})