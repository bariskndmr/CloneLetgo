import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Foundation,
  Ionicons,
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import HomeNavigator from "./HomeNavigator";
import PostNavigator from "./PostNavigator";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children }) => {
  return (
    <TouchableOpacity
      style={{
        width: 70,
        height: 70,
        backgroundColor: "#e24f61",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        borderColor: "#fff",
        borderWidth: 3,
        marginTop: -15,
      }}
    >
      <FontAwesome name="camera" size={20} color="#fff" />
      <Text style={{ color: "#fff", marginTop: 2, fontWeight: "600" }}>
        Sat
      </Text>
    </TouchableOpacity>
  );
};

function RootNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Ana Sayfa"
      screenOptions={{
        tabBarHideOnKeyboard: true,
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
      <Tab.Screen
        name="Bildirimler"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Ionicons name="notifications" size={24} color={color} />
              <View
                style={{
                  position: "absolute",
                  right: -9,
                  top: -6,
                  backgroundColor: "#f24e61",
                  width: 16,
                  height: 16,
                  borderRadius: 50,
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#fff" }}>2</Text>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Sat"
        component={HomeNavigator}
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Sohbet"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="message-processing"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="İlanlarım"
        component={PostNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="appstore1" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default RootNavigator;
