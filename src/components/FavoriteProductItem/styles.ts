import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    width: width * 0.27,
    height: height * 0.14,
    borderRadius: 10,
    marginRight: 10,
  },
});
