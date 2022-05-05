import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import products from "../../../assets/products";
import { Product } from "src/models";

import styles from "./styles";
import FavoriteProductItem from "src/components/FavoriteProductItem";

const ShowCasePostings = () => {
  const [showCaseProducts, setShowCaseProducts] = useState<Product[]>([]);
  useEffect(() => {
    setShowCaseProducts(products);
  }, []);

  return (
    <View style={styles.showCaseContainer}>
      <View style={styles.showCaseInnerContainer}>
        <Text style={styles.showCaseTopTitle}>Vitrin İlanları</Text>
        <TouchableOpacity style={styles.showCaseShowAllButton}>
          <Text style={styles.showCaseShowAllButtonText}>Hepsini Gör</Text>
          <AntDesign name="right" size={20} color="#f24e61" />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.showCaseProducts}
        bounces={true}
        horizontal={true}
      >
        {showCaseProducts.map((item) => {
          return <FavoriteProductItem product={item} key={item.id} />;
        })}
      </ScrollView>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ShowCasePostings />
    </SafeAreaView>
  );
};

export default HomeScreen;
