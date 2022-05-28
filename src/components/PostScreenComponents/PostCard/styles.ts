import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginVertical: "1.5%",
    marginHorizontal: "3%",
    borderWidth: 2,
    shadowColor: "gray",
    shadowOpacity: 0.1,
    borderRadius: 10,
    borderColor: "#eaeaea",
    backgroundColor: "#fff",
  },
  innerContainer: {
    marginHorizontal: 10,
    marginTop: 10,
    flexDirection: "row",
    borderBottomWidth: 1,
    padding: 10,
    borderColor: "#eaeaea",
  },
  image: { width: 60, height: 60, borderRadius: 10 },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  descriptionContainer: { flex: 1 },
  infoContainer: {
    flex: 1,
    alignItems: "flex-start",
    paddingHorizontal: 10,
  },
  price: {
    fontWeight: "bold",
  },
});
