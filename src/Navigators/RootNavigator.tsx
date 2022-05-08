import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Foundation } from "@expo/vector-icons";

import HomeNavigator from "./HomeNavigator";

const Tab = createBottomTabNavigator();

function RootNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Ana Sayfa"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#f24e61",
        tabBarInactiveTintColor: "#959595",
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="Ana Sayfa"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default RootNavigator;
