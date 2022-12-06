import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "green",
    height: 40,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  categoryBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 10,
    height: 20,
    margin: 6,
  },
});

export default styles;
