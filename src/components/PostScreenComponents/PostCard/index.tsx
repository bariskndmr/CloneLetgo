import React from "react";
import { View, Text, Image } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

import { Product } from "src/models";
import styles from "./styles";

type PostCardTypes = {
  product: Product;
};

function PostCard({ product }: PostCardTypes) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <View style={styles.infoContainer}>
        <View style={styles.priceContainer}>
          <Text>{product.price}</Text>
          <EvilIcons name="trash" size={24} color="black" />
        </View>
        <View style={styles.descriptionContainer}>
          <Text>{product.description}</Text>
        </View>
      </View>
    </View>
  );
}

export default PostCard;
