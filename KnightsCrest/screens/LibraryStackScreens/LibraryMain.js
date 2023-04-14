import { View, Text, Pressable, SafeAreaView } from "react-native";
import { Image } from 'react-native';

// Theme and styles
import { useTheme } from '../../ThemeContext';
import { createGlobalStyles } from '../../styles/globalStyles';

// Darkmode
import libraryLogoDark from '../../assets/images/ucfLibrariesLogoWhite.png';

export default function LibraryMain({navigation, route}) {
    const theme = useTheme();
    const { isDarkModeEnabled } = useTheme();
    const globalStyles = createGlobalStyles(theme);

    return (
        <SafeAreaView style={globalStyles.container}>
        <Image
            source={isDarkModeEnabled ? 
            libraryLogoDark: require('../../assets/images/ucfLibrariesLogo.png')}
            style={{ width: 350, height: 105 }}
        />
            <View>
                <View style={{ paddingTop: 10 }}>
                    <Pressable style={globalStyles.button} onPress={() => navigation.navigate("Loans")}>
                        <Text style={globalStyles.text}>Loans</Text>
                    </Pressable>
                </View>
                <View style={{ paddingTop: 10 }}>
                    <Pressable style={globalStyles.button} onPress={() => navigation.navigate("Requests")}>
                        <Text style={globalStyles.text}>Requests</Text>
                    </Pressable>
                </View>
                <View style={{ paddingTop: 10 }}>
                    <Pressable style={globalStyles.button} onPress={() => navigation.navigate("Fees")}>
                        <Text style={globalStyles.text}>Fines/Fees</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}