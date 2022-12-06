import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  navBar: {
    marginTop: 20,
    height: 80,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#fc6603",
  },
  logo: {
    flex: 1,
    resizeMode: "contain",
    height: 100,
    alignSelf: "center",
    marginRight: 20,
  },
  navBarTitle: {
    flex: 1.4,
    flexDirection: "row",
    height: 38,
    width: "100%",
    alignSelf: "center",
    alignItems: "flex-end",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 8,
  },
  navBarRight: {
    flex: 0.6,
    alignSelf: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});

export default styles;
