import React from "react";
import { ScrollView } from "react-native";

import MainProducts from "src/components/MainProducts";
import MessageNotification from "src/components/MessageNotification";

import styles from "./styles";

function CategoryFilterScreen() {
  return (
    <ScrollView>
      <MessageNotification />
      <MainProducts hasButton={false} title="Arama Sonuçları(1041565)" />
    </ScrollView>
  );
}

export default CategoryFilterScreen;
