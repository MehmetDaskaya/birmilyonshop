import { StyleSheet } from "react-native";
import fonts from "../../constants/fonts";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    borderColor: "#bdbdbd",
    borderWidth: 1,
    margin: 10,
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: "contain",
    backgroundColor: "white",
  },
  bodyContainer: {
    flex: 1,
    padding: 4,
    justifyContent: "space-between",
  },
  title: {
    fontSize: fonts.fontSize,
    color: fonts.color,
  },
  price: {
    textAlign: "right",
    fontSize: 16,
    fontStyle: "italic",
  },
});
