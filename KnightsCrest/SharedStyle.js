import { StyleSheet } from "react-native";

const sharedStyles = StyleSheet.create({   
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }, 
    headingText:{
        fontSize: 22
    },
    subHeadingText:{
        fontSize: 18,
        fontFamily: "GothamBook"
    },
    bodyText:{
        fontSize: 16,
        fontFamily: "GothamBook"
    },
    smallText:{
        fontSize: 14,
        fontFamily: "GothamBook"
    },
    horizontalFlex: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    divider: {
        borderBottomColor: '#707070', 
        borderBottomWidth: 1, 
        paddingTop: 10
        },
})

export default sharedStyles;