import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Product } from "src/models";

import styles from "./styles";

type productProps = {
  product: Product;
  prodType: string;
};

function FavoriteProductItem({ product, prodType }: productProps) {
  return (
    <TouchableOpacity
      style={prodType === "showcase" ? styles.container : styles.mainContainer}
    >
      <Image
        source={{ uri: product.image }}
        resizeMode="stretch"
        style={
          prodType === "showcase"
            ? styles.imageContainer
            : styles.mainImageContainer
        }
      />
      {prodType === "showcase" && (
        <View style={styles.popularContainer}>
          <Text style={styles.popularText}>Öne Çıkan</Text>
        </View>
      )}
      <TouchableOpacity>
        <AntDesign
          style={{ position: "absolute", right: 10, bottom: 10 }}
          name="heart"
          size={24}
          color="white"
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

export default FavoriteProductItem;
