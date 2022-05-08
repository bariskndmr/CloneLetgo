import React from "react";
import { Text, View } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import styles from "./styles";

function MessageNotification() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.messageContainer}>
          <MaterialCommunityIcons
            name="message-processing"
            size={24}
            color="#807f80"
          />
          <Text style={styles.text}>Mesaj bildirimlerini aç</Text>
        </View>
        <AntDesign name="right" size={24} color="#807f80" />
      </View>
    </View>
  );
}

export default MessageNotification;
