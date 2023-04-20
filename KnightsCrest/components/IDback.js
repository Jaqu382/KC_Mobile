import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "@rneui/base";
import QR from "../components/QR";
import Barcode from "react-native-barcode-builder";

import { useTheme } from "../ThemeContext";
import { createGlobalStyles } from "../styles/globalStyles";

export default function IDback() {
  const theme = useTheme();
  const globalStyles = createGlobalStyles(theme);

  const [showQR, setShowQR] = useState(true);

  return (
    <Card containerStyle={globalStyles.IDcard}>
      <View>
        <Text style={globalStyles.title}>
          Scan to view user:
        </Text>
      </View>

    <QR/>

    </Card>
  );
}