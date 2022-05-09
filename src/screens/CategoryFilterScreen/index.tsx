import React from "react";
import { ScrollView } from "react-native";

import MainProducts from "src/components/MainProducts";
import MessageNotification from "src/components/MessageNotification";

import styles from "./styles";

function CategoryFilter() {
  return (
    <ScrollView>
      <MessageNotification />
      <MainProducts />
    </ScrollView>
  );
}

export default CategoryFilter;
