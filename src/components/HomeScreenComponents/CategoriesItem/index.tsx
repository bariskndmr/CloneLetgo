import React from "react";
import { TouchableOpacity, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Category } from "src/models";

import styles from "./styles";

type Categories = {
  item: Category;
};

function CategoriesItem({ item }: Categories) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CategoryFilter", { category: item })}
      style={styles.container}
    >
      <Image style={styles.image} source={item.src} resizeMode="stretch" />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
}

export default CategoriesItem;
