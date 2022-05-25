import React, { useState } from "react";
import { ScrollView } from "react-native";

import CategoryFiltering from "src/components/CategoryFilterScreenComponents/CategoryFiltering";
import MainProducts from "src/components/MainProducts";
import MessageNotification from "src/components/MessageNotification";

function CategoryFilterScreen(props) {
  const [category, setCategory] = useState(props.route.params.category);

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <CategoryFiltering category={category} />
      <MessageNotification />
      <MainProducts hasButton={false} title="Arama Sonuçları(1041565)" />
    </ScrollView>
  );
}

export default CategoryFilterScreen;
