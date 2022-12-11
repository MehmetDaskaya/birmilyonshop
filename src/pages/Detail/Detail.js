import { View, Text, Image, ScrollView, FlatList } from "react-native";
import React from "react";
import styles from "./Detail.style";
import useFetch from "../../hooks/useFetch/useFetch";
import { API_URL } from "@env";
import { useDispatch, useSelector } from "react-redux";
import {
  setCartPiece,
  setTotalSum,
  selectCartPiece,
  selectTotalSum,
  setCart,
} from "../../../store/slices/cartSlice";

import ProductCard from "../../components/ProductCard/ProductCard";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error";
import Button from "../../components/Button";

const Detail = ({ route, product, addToCart }) => {
  const piece = useSelector(selectCartPiece);
  const totalSum = useSelector(selectTotalSum);
  const dispatch = useDispatch();
  const { id } = route.params;
  const { loading, error, data } = useFetch(`${API_URL}/${route.params.id}`);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const addToCarts = (item) => {
    dispatch(setCart(item));
  };

  const renderProduct = ({ item }) => (
    <ProductCard
      product={item}
      onSelect={() => handleProductSelect(item.id)}
      addToCart={addToCarts}
    />
  );

  const handleProductSelect = (id) => {
    navigation.navigate("Cart", { id });
  };

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: data.image }} />
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={[styles.price, { fontWeight: "300" }]}>
          {data.category}
        </Text>
        <Text style={styles.description}>{data.description}</Text>
        <Text style={styles.price}>${data.price}</Text>

        <FlatList data={data} renderItem={renderProduct} />
        <Button
          onPress={() => {
            dispatch(setCartPiece(piece + 1));
            dispatch(setTotalSum(totalSum + data.price));
            dispatch(setCart(data));
          }}
          text="Add to Cart"
        />
      </View>
    </ScrollView>
  );
};

export default Detail;
