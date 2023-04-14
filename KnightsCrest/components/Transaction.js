import { View,Text} from "react-native"
import { format } from 'date-fns';

export default function Transaction({ date, amount }) {
    let myDate = new Date(date);
    let formatDate = format(myDate, 'MM/dd/yyyy');
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text>{formatDate}</Text>
        </View>
        <View>
          <Text>{amount.toFixed(2)}</Text>
        </View>
      </View>
    );
  }