import { View, Text } from "react-native";
import React from "react";
import styles from "./CategoryBox.style";

import Categories from "../Categories/Categories";

const CategoryBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.categoryBox}>
        <Categories category={"electronic"} />
      </View>
      <View style={styles.categoryBox}>
        <Categories category={"jewelery"} />
      </View>
      <View style={styles.categoryBox}>
        <Categories category={"men's"} />
      </View>
      <View style={styles.categoryBox}>
        <Categories category={"women's"} />
      </View>
    </View>
  );
};

export default CategoryBox;
