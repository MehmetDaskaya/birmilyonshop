import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    margin: 10,
  },
  searchBox: {
    height: 40,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    margin: 4,
    padding: 10,
  },
  searchButton: {
    height: 30,
    marginHorizontal: 120,
    borderRadius: 30,
    borderColor: "gray",
    borderWidth: 1,
    margin: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  searchText: {
    textAlign: "center",
  },
});
