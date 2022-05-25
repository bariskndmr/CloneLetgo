import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    margin: "3%",
    flexDirection: "row",
    backgroundColor: "red",
  },
  image: { width: 60, height: 60, borderRadius: 10 },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  descriptionContainer: { flex: 1 },
  infoContainer: {
    alignItems: "flex-start",
    flex: 1,
  },
});
