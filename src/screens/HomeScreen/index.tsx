import React from "react";
import { ScrollView } from "react-native";

import CategoryFilter from "src/components/CategoryFilter";
import MainProducts from "src/components/MainProducts";
import ShowCasePostings from "src/components/ShowCaseProducts";

import styles from "./styles";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <CategoryFilter />
      <ShowCasePostings />
      <MainProducts />
    </ScrollView>
  );
};

export default HomeScreen;
