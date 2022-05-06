import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";

type headerProps = {
  title: string;
  buttonText: string;
};

function ProductsHeader({ title, buttonText }: headerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{buttonText}</Text>
        <AntDesign name="right" size={20} color="#f24e61" />
      </TouchableOpacity>
    </View>
  );
}

export default ProductsHeader;
