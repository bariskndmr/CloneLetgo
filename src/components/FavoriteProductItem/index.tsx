import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Product } from "src/models";

import styles from "./styles";

type productProps = {
  product: Product;
};

function FavoriteProductItem({ product }: productProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{ uri: product.image }}
        resizeMode="stretch"
        style={styles.container}
      />
      <AntDesign
        style={{ position: "absolute", right: 10, bottom: 10 }}
        name="heart"
        size={24}
        color="white"
      />
    </TouchableOpacity>
  );
}

export default FavoriteProductItem;
