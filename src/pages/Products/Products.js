import { SafeAreaView, Text, FlatList, View } from "react-native";
import React, { useState, useEffect } from "react";
import getProduct from "../../../api/endpoints";
import styles from "./Products.style";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProduct(data, setData);
  }, []);

  const renderProduct = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
      <Text style={styles.container}>{item.price}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default Products;
