import { StyleSheet, Text, View, Linking, Pressable} from 'react-native';

export default function SupportLink(props){
    const {heading, supportText, link} = props
    return(
        <Pressable style = {styles.linkBox} onPress={()=>{Linking.openURL(link)}}>
            <View>
                <Text>
                    {heading}
                </Text>
            </View>
            <View>
                <Text>
                    {supportText}
                </Text>
            </View>
        </Pressable>
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
})