import React, { useEffect, useState } from "react";
import { View, Image, ScrollView, Text } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

import { Category, Filtering } from "src/models";
import filteringsData from "../../../../assets/filterings";

import styles from "./styles";

function CategoryFiltering({ category }: { category: Category }) {
  const [filterings, setFilterings] = useState<Filtering[]>([]);
  useEffect(() => {
    setFilterings(filteringsData);
    return () => {
      setFilterings([]);
    };
  }, []);

  return (
    <ScrollView
      style={styles.scrollview}
      bounces={true}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.secondary.filteringContainer}>
        <Image source={category.src} style={styles.secondary.image} />
        <Text style={styles.secondary.filteringText}>{category.name}</Text>
        <Ionicons name="close" size={20} color="#fff" />
      </View>
      {filterings.map((item) => (
        <View style={styles.primary.filteringContainer} key={item.id}>
          <Text style={styles.primary.filteringText}>{item.name}</Text>
          <Feather name="chevron-down" size={20} color="#212121" />
        </View>
      ))}
    </ScrollView>
  );
}

export default CategoryFiltering;
