import React, { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";

import FavoriteProductItem from "src/components/FavoriteProductItem";
import products from "../../../assets/products";
import ProductsHeader from "../ProductsHeader";
import { Product } from "src/models";

import styles from "./styles";

const ShowCasePostings = () => {
  const [showCaseProducts, setShowCaseProducts] = useState<Product[]>([]);

  useEffect(() => {
    setShowCaseProducts(products);
  }, []);

  return (
    <>
      <ProductsHeader title="Vitrin İlanları" buttonText="Hepsini Gör" />
      <View style={styles.showCaseContainer}>
        <ScrollView
          style={styles.showCaseProducts}
          bounces={true}
          horizontal={true}
        >
          {showCaseProducts.map((item) => {
            return (
              <FavoriteProductItem
                prodType="showcase"
                product={item}
                key={item.id}
              />
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

export default ShowCasePostings;
