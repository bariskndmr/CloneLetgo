import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    width: width * 0.27,
    height: width * 0.27,
    borderRadius: 10,
    marginRight: 10,
  },
  imageContainer: {
    width: width * 0.27,
    height: width * 0.27,
    borderRadius: 10,
  },
  popularText: { fontSize: 10, fontWeight: "600" },
  popularContainer: {
    position: "absolute",
    top: 10,
    right: -20,
    backgroundColor: "white",
    transform: [{ rotate: "45deg" }],
    alignItems: "center",
    paddingVertical: 3,
    paddingHorizontal: 20,
  },
  ///////// /////////////
  mainContainer: {
    width: width * 0.44,
    height: width * 0.44,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  mainImageContainer: {
    width: width * 0.44,
    height: width * 0.44,
    borderRadius: 10,
  },
});
