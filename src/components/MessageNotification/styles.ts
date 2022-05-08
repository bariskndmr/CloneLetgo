import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { backgroundColor: "#2c2c2c", padding: 8 },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: "4%",
  },
  messageContainer: { flexDirection: "row", alignItems: "center" },
  text: { paddingLeft: 5, color: "#eceff1" },
});
