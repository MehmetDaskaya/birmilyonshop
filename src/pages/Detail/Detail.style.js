import { Dimensions, StyleSheet } from "react-native";

const deviceSize = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    marginTop: 20,
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: "contain",
    backgroundColor: "white",
  },
  bodyContainer: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  description: {
    fontStyle: "italic",
    marginVertical: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
  },
  price: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "right",
  },
  button: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonItem: {
    marginHorizontal: 3,
  },
});
