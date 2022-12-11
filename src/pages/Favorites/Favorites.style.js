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

  button: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonItem: {
    marginHorizontal: 3,
  },

  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "#bdbdbd",
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: "contain",
    backgroundColor: "white",
    borderRadius: 10,
  },
  bodyContainer: {
    flex: 1,
    padding: 4,
    justifyContent: "space-between",
  },
  titleContainer: {
    flexDirection: "row",
  },
  title: {
    fontSize: 16,
    color: "black",
    width: "80%",
  },
  favButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "15%",
    height: 40,
    backgroundColor: "tomato",
    borderRadius: 50,
  },
  price: {
    textAlign: "right",
    fontSize: 16,
    fontStyle: "italic",
  },
  priceBox: {
    alignSelf: "flex-end",
    alignItems: "center",
    backgroundColor: "#ffaf7a",
    borderRadius: 10,
    width: 80,
  },
});
