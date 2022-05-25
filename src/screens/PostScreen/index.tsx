import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text } from "react-native";

import PostCard from "src/components/PostScreenComponents/PostCard";
import { Product } from "src/models";
import products from "../../../assets/products";

function PostScreen() {
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);

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
      />
    </SafeAreaView>
  );
}

export default PostScreen;
