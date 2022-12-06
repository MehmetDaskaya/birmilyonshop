import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet, Text, View } from "react-native";

function Error() {
  return (
    <View style={styles.container}>
      <LottieView source={require("../../assets/error.json")} autoPlay />
      <View style={styles.bodyContainer}>
        <Text style={styles.text}>An error occured</Text>
        <Text style={styles.text}>Please try again.</Text>
      </View>
    </View>
  );
}

export default Error;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
  },
  text: {
    flex: 1,
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 110,
  },
});
