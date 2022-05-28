import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

import { Product } from "src/models";

import styles from "./styles";

type PostCardTypes = {
  product: Product;
};

function PostCard({ product }: PostCardTypes) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image style={styles.image} source={{ uri: product.image }} />
        <View style={styles.infoContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>₺{product.price}</Text>
            <TouchableOpacity>
              <EvilIcons name="trash" size={30} color="#646464" />
            </TouchableOpacity>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={{ fontWeight: "500", color: "#646464" }}>
              {product.description}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{ justifyContent: "center", alignItems: "center", margin: 15 }}
      >
        <Text style={{ color: "#f24e61", fontWeight: "bold" }}>
          Daha Fazla Bilgi
        </Text>
      </TouchableOpacity>
      <View></View>
    </View>
  );
}

export default PostCard;
