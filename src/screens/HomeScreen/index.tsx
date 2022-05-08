import React from "react";
import { ScrollView } from "react-native";

import CategoryFilter from "src/components/CategoryFilter";
import MainProducts from "src/components/MainProducts";
import MessageNotification from "src/components/MessageNotification";
import ShowCasePostings from "src/components/ShowCaseProducts";

const HomeScreen = () => {
  return (
    <ScrollView>
      <MessageNotification />
      <CategoryFilter />
      <ShowCasePostings />
      <MainProducts />
    </ScrollView>
  );
};

export default HomeScreen;
