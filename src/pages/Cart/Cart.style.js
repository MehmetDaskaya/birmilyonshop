import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    padding: 4,
    justifyContent: "space-between",
    flexDirection: "row",
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
  infoBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#ffaf7a",
    borderRadius: 10,
    margin: 10,
  },
  priceBox: {
    alignSelf: "flex-end",
    alignItems: "center",
    backgroundColor: "#ffaf7a",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
    padding: 6,
  },
});

export default styles;
