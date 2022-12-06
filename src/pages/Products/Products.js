import { SafeAreaView, FlatList } from "react-native";
import React from "react";
import { API_URL } from "@env";
import useFetch from "../../hooks/useFetch/useFetch";

import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Products.style";
import Loading from "../../components/ProductCard/Loading/Loading";
import Error from "../../components/Error";
import NavBar from "../../components/NavBar/NavBar";
import CategoryBox from "../../components/CategoryBox";

const Products = ({ navigation }) => {
  //handles the state of the data, fetching process and error
  const { error, loading, data } = useFetch(API_URL);

  const handleProductSelect = (id) => {
    navigation.navigate("Detail", { id });
  };

  const renderProduct = ({ item }) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <CategoryBox />

      <FlatList data={data} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default Products;
