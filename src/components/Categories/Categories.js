import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import useFetch from "../../hooks/useFetch/useFetch";
import { API_URL } from "@env";

import styles from "./Categories.style";

const Categories = ({ category }) => {
  const { loading } = useFetch(API_URL);

  const handleProductSelect = (id) => {
    navigation.navigate("Detail", { id });
  };

  const renderProduct = ({ item }) => (
    <Categories
      category={item}
      color={{}}
      onSelect={() => handleProductSelect(item.id)}
    />
  );

  return (
    <TouchableOpacity onPress={{}}>
      <Text style={styles.text}>{category}</Text>
    </TouchableOpacity>
  );
};

export default Categories;
