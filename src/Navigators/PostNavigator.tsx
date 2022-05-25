import React from "react";
import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import PostScreen from "src/screens/PostScreen";

const Stack = createNativeStackNavigator();

function PostNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PostScreen"
        component={PostScreen}
        options={{
          headerTitle: () => (
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>İlanlarım</Text>
          ),
          headerLeft: () => (
            <MaterialCommunityIcons
              name="lightbulb-on"
              size={24}
              color="#919191"
            />
          ),
          headerRight: () => (
            <Ionicons name="ios-arrow-redo-sharp" size={24} color="#919191" />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default PostNavigator;
