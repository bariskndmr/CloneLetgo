import React, { useEffect, useState } from "react";
import { View } from "react-native";

import FavoriteProductItem from "../FavoriteProductItem";
import ProductsHeader from "../ProductsHeader";
import products from "../../../assets/products";
import { Product } from "src/models";

import styles from "./styles";

type props = {
  hasButton?: boolean;
  title: string;
};

const MainProducts = ({ hasButton, title }: props) => {
  const [mainProducts, setMainProducts] = useState<Product[]>([]);

  useEffect(() => {
    setMainProducts(products);
  }, []);

  return (
    <>
      <ProductsHeader hasButton={hasButton} title={title} buttonText="Düzelt" />
      <View style={styles.container}>
        <View style={styles.listContainer}>
          {mainProducts.map((item) => {
            return (
              <FavoriteProductItem
                prodType="main"
                product={item}
                key={item.id}
              />
            );
          })}
        </View>
      </View>
    </>
  );
};

export default MainProducts;
