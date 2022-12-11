import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  navContainer: {},
  favoritesBox: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fc6603",
    padding: 6,
    borderColor: "black",
    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
});

export default styles;
