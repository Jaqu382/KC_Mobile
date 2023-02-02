import { View, Text , StyleSheet, Pressable} from "react-native";

export default function FormButton(props){
    const {title} = props;
    return(
        <>
        <Pressable style = {styles.button}>
            <Text>{title}</Text>
        </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 250,
        height:35,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 3,
        backgroundColor: "#ffc904",
        boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" 
  },
})