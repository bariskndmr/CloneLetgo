import React, { useEffect, useState } from "react";
import { FlatList, Pressable, SafeAreaView, Text, View } from "react-native";

import PostCard from "src/components/PostScreenComponents/PostCard";
import { Product } from "src/models";
import products from "../../../assets/products";
import styles from "./styles";

function PostScreen() {
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);
  const [headerTexts, setHeaderTexts] = useState<string[]>([
    "Favoriler",
    "Satıyor",
    "Süresi Dolmuş",
    "Satıldı",
  ]);
  const [pressed, setPressed] = useState(0);

  useEffect(() => {
    setFavoriteProducts(products);
    () => {
      return setFavoriteProducts([]);
    };
  }, []);

  const RenderProducts = (item) => <PostCard key={item.id} product={item} />;

  return (
    <SafeAreaView>
      <FlatList
        data={favoriteProducts}
        renderItem={({ item }) => RenderProducts(item)}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={() => (
          <View style={styles.primary.stickyHeaderContainer}>
            {headerTexts.map((item, index) => {
              return (
                <Pressable
                  onPress={() => setPressed(index)}
                  key={index}
                  style={[
                    index === pressed
                      ? styles.primary.headerButton
                      : styles.secondary.headerButton,
                  ]}
                >
                  <Text
                    style={[
                      index === pressed
                        ? styles.primary.headerText
                        : styles.secondary.headerText,
                    ]}
                  >
                    {item}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        )}
      />
    </SafeAreaView>
  );
}

export default PostScreen;
