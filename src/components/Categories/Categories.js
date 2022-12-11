import { Text, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./Categories.style";

const Categories = ({ category }) => {
  return (
    <TouchableOpacity>
      <Text style={styles.text}>{category}</Text>
    </TouchableOpacity>
  );
};

export default Categories;
