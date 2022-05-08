import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";

import categoriesData from "../../../assets/categories";
import { Category } from "src/models";
import CategoriesItem from "../CategoriesItem";
import styles from "./styles";

function CategoryFilter() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    setCategories(categoriesData);
    return () => setCategories([]);
  }, []);

  return (
    <ScrollView
      bounces={true}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {categories.map((item) => {
        return <CategoriesItem category={item} key={item.id} />;
      })}
    </ScrollView>
  );
}

export default CategoryFilter;
