import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./Button.style";

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
