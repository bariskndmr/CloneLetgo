import { StyleSheet } from "react-native";

const basestyles = StyleSheet.create({
  stickyHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 12,
    marginBottom: "2%",
    backgroundColor: "#fff",
  },
  headerButton: {
    borderColor: "#ff3e55",
    paddingBottom: 3,
  },
  headerText: { fontWeight: "bold" },
});

export default {
  primary: StyleSheet.create({
    stickyHeaderContainer: {
      ...basestyles.stickyHeaderContainer,
    },
    headerButton: {
      ...basestyles.headerButton,
      borderBottomWidth: 3,
    },
    headerText: {
      ...basestyles.headerText,
      color: "#ff3e55",
    },
  }),
  secondary: StyleSheet.create({
    stickyHeaderContainer: {
      ...basestyles.stickyHeaderContainer,
    },
    headerButton: {
      ...basestyles.headerButton,
    },
    headerText: {
      ...basestyles.headerText,
      color: "#797979",
    },
  }),
};
