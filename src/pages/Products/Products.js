import {
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";
import { API_URL } from "@env";
import useFetch from "../../hooks/useFetch/useFetch";
import { setFavorites } from "../../../store/slices/itemSlice";
import { useDispatch } from "react-redux";

import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Products.style";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error";
import NavBar from "../../components/NavBar/NavBar";
import CategoryBox from "../../components/CategoryBox";

const Products = ({ navigation }) => {
  //handles the state of the data, fetching process and error
  const { error, loading, data } = useFetch(API_URL);
  const dispatch = useDispatch();

  const addToFavorites = (item) => {
    dispatch(setFavorites(item));
  };

  const handleProductSelect = (id) => {
    navigation.navigate("Detail", { id });
  };

  const renderProduct = ({ item }) => (
    <ProductCard
      product={item}
      onSelect={() => handleProductSelect(item.id)}
      addToFav={addToFavorites}
    />
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
      <View style={styles.navContainer}>
        <CategoryBox />
        <TouchableOpacity
          onPress={() => navigation.navigate("Favorites")}
          style={styles.favoritesBox}
        >
          <Text style={styles.text}>See Your Favorite Items</Text>
        </TouchableOpacity>
      </View>

      <FlatList data={data} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default Products;
