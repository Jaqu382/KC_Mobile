import { View,Text} from "react-native"
import { format } from 'date-fns';

import { useTheme } from "../ThemeContext";
import { createGlobalStyles } from "../styles/globalStyles";

export default function Transaction({ date, amount }) {
    let myDate = new Date(date);
    let formatDate = format(myDate, 'MM/dd/yyyy');

    const theme = useTheme();
    const globalStyles = createGlobalStyles(theme);
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text style = {globalStyles.bodyText}>{formatDate}</Text>
        </View>
        <View>
          <Text style = {globalStyles.bodyText}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    );
  }