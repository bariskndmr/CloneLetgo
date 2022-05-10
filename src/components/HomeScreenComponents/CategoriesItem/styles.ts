import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    width: width * 0.18,
    height: width * 0.18,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 5,
  },
  image: {
    width: width * 0.14,
    height: width * 0.14,
    borderRadius: 50,
  },
  text: {
    fontSize: 9,
    color: "#767575",
    fontWeight: "bold",
  },
});
