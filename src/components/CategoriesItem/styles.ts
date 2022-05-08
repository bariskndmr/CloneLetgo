import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    width: width * 0.17,
    height: width * 0.17,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 5,
  },
  image: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: 50,
  },
  text: {
    fontSize: 9,
    color: "#767575",
    fontWeight: "bold",
  },
});
