import { View, Text, SafeAreaView, StyleSheet} from "react-native"
import SupportLink from "../../components/SupportLink"

export default function HelpScreen(){
    return(
        <SafeAreaView style = {styles.container}>
            <View>
                <View>
                    <Text>Knights Crest Support</Text>
                </View>
                <View style={styles.divider}/>
                <View>
                    <View style = {{paddingTop: 10}}>
                        <SupportLink heading = "NID password Self-Service Reset Tool" 
                        supportText = "Rest your NID password" 
                        link = "https://mynid.ucf.edu/pages/NidCheck.aspx"/>
                    </View>
                    <View style = {{paddingTop: 10}}>
                        <SupportLink heading = "Support Center" 
                        supportText = "Search knowledge base and submit a ticket." 
                        link = "https://ucf.service-now.com/ucfit"/>
                    </View>
                    <View style = {{paddingTop: 10}}>
                        <SupportLink heading = "Call the support center" 
                        supportText = "407-823-5117" 
                        link = "tel:${407-823-5117}"/>
                    </View>
                    <View style = {{paddingTop: 10}}>
                        <SupportLink heading = "Email Support Center" 
                        supportText = "itsupport@ucf.edu" 
                        link = "mailto:itsupport@ucf.edu"/>
                    </View>
                </View>
                <View style={styles.divider}/>
                <View>
                    <Text>Support Center Hours</Text>
                    <Text>7:00AM - 10:00PM, Monday - Friday</Text>
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
    divider: {
    borderBottomColor: '#707070', 
    borderBottomWidth: 1, 
    paddingTop: 10
},})