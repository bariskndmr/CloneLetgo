import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const basestyles = StyleSheet.create({
  container: { marginVertical: 10, marginHorizontal: 12 },
  filteringContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 6,
    borderRadius: 20,
    paddingHorizontal: 8,
  },
  filteringText: {},
  image: {
    width: width * 0.07,
    height: width * 0.07,
    borderRadius: 50,
  },
});
export default {
  scrollview: {
    ...basestyles.container,
  },
  primary: StyleSheet.create({
    filteringContainer: {
      ...basestyles.filteringContainer,
      backgroundColor: "#e9e9e9",
      height: height * 0.044,
    },
    filteringText: {
      ...basestyles.filteringText,
      marginRight: 3,
    },
  }),
  secondary: StyleSheet.create({
    filteringContainer: {
      ...basestyles.filteringContainer,
      backgroundColor: "#6C6B6A",
      height: height * 0.045,
    },
    filteringText: {
      ...basestyles.filteringText,
      marginHorizontal: 5,
      color: "#fff",
      fontWeight: "bold",
    },
    image: {
      ...basestyles.image,
    },
  }),
};
