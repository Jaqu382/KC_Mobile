import { StyleSheet, Text, View, Linking} from 'react-native';

export default function supportLink(props){
    return(
        <View style = {styles.linkBox}>
            <View>
                <Text></Text>
            </View>
            <View>
                <Text></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    linkBox: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 3,
        backgroundColor: "#ffc904",
        boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" 
      },
    hyperlink: {
        color: "blue",
        textDecorationLine: "underline"
      },
})