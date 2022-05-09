import React from "react";
import { TouchableOpacity, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Category } from "src/models";

import styles from "./styles";

type Categories = {
  category: Category;
};

function CategoriesItem({ category }: Categories) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CategoryFilter")}
      style={styles.container}
    >
      <Image style={styles.image} source={category.src} resizeMode="stretch" />
      <Text style={styles.text}>{category.name}</Text>
    </TouchableOpacity>
  );
}

export default CategoriesItem;
