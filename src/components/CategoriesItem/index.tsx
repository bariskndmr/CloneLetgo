import React from "react";
import { TouchableOpacity, Image, Text } from "react-native";

import { Category } from "src/models";
import styles from "./styles";

type Categories = {
  category: Category;
};

function CategoriesItem({ category }: Categories) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={category.src} resizeMode="stretch" />
      <Text style={styles.text}>{category.name}</Text>
    </TouchableOpacity>
  );
}

export default CategoriesItem;
