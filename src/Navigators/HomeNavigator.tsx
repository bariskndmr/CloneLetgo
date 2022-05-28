import React from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  Image,
  Text,
  TextInput,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import CategoryFilterScreen from "src/screens/CategoryFilterScreen";
import HomeScreen from "src/screens/HomeScreen";
import ProductDetailsScreen from "src/screens/ProductDetailsScreen";

const Stack = createNativeStackNavigator();

type HeaderProps = {
  back?: boolean;
  onPress?: any;
  text: string;
};

const MainHeaderComponent = ({ back = false, onPress, text }: HeaderProps) => {
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
      <TouchableOpacity onPress={onPress}>
        {back ? (
          <FontAwesome5 name="arrow-left" size={20} color="#989898" />
        ) : (
          <Image
            style={{ width: 35, height: 35, borderRadius: 50 }}
            source={{
              uri: "https://starsjacket.com/wp-content/uploads/2021/06/Jake-Peralta-Brooklyn-99-Brown-Leather-Jacket.jpg",
            }}
          />
        )}
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
        {text}
      </Text>
    </SafeAreaView>
  );
};

function HomeNavigator() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => <MainHeaderComponent text="Filtrele" />,
        }}
      />
      <Stack.Screen name="ProductDetail" component={ProductDetailsScreen} />
      <Stack.Screen
        name="CategoryFilter"
        component={CategoryFilterScreen}
        options={{
          header: () => (
            <MainHeaderComponent
              text="Filtrele (1)"
              back={true}
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
