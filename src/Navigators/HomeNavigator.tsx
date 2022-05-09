import React from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  Image,
  Text,
  TextInput,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoryFilterScreen from "src/screens/CategoryFilterScreen";
import HomeScreen from "src/screens/HomeScreen";

const Stack = createNativeStackNavigator();

const MainHeaderComponent = () => {
  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: "5%",
        marginVertical: 5,
      }}
    >
      <TouchableOpacity>
        <Image
          style={{ width: 35, height: 35, borderRadius: 50 }}
          source={{
            uri: "https://starsjacket.com/wp-content/uploads/2021/06/Jake-Peralta-Brooklyn-99-Brown-Leather-Jacket.jpg",
          }}
        />
      </TouchableOpacity>
      <TextInput
        style={{
          backgroundColor: "#EAE9EA",
          marginHorizontal: 10,
          flex: 1,
          padding: 10,
          borderRadius: 10,
          flexDirection: "row",
          textAlign: "center",
        }}
        placeholder="Ara..."
      />
      <Text style={{ color: "#ff184d", fontSize: 18, fontWeight: "500" }}>
        Filtrele
      </Text>
    </SafeAreaView>
  );
};

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => <MainHeaderComponent />,
        }}
      />
      <Stack.Screen
        name="CategoryFilter"
        component={CategoryFilterScreen}
        options={{
          header: () => <MainHeaderComponent />,
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
