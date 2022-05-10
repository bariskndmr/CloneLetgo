import React from "react";
import { ScrollView } from "react-native";

import CategoryFilter from "src/components/HomeScreenComponents/CategoryFilter";
import MainProducts from "src/components/MainProducts";
import MessageNotification from "src/components/MessageNotification";
import ShowCasePostings from "src/components/ShowCaseProducts";

const HomeScreen = () => {
  return (
    <ScrollView>
      <MessageNotification />
      <CategoryFilter />
      <ShowCasePostings />
      <MainProducts title="Pendik" />
    </ScrollView>
  );
};

export default HomeScreen;
