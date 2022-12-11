import { StyleSheet } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const Loading = () => {
  return (
    <LottieView
      style={styles.container}
      source={require("../../assets/loading.json")}
      autoPlay
    />
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
});
