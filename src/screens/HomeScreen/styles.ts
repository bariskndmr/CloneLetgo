import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  showCaseContainer: {
    width: "92%",
    marginVertical: 10,
  },
  showCaseInnerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  showCaseTopTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  showCaseShowAllButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#f24e61",
  },
  showCaseShowAllButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  showCaseProducts: {
    marginVertical: 10,
  },
  heartIcon: { position: "absolute", right: 10, bottom: 10 },
});
