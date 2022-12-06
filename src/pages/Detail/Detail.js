import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import styles from "./Detail.style";
import useFetch from "../../hooks/useFetch/useFetch";
import { API_URL } from "@env";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  setCartPiece,
  setTotalSum,
  selectCartPiece,
  selectTotalSum,
  setFavorites,
  selectFavorites,
} from "../../../store/slices/cartSlice";

import Loading from "../../components/ProductCard/Loading/Loading";
import Error from "../../components/Error";
import Button from "../../components/Button";

const Detail = ({ route }) => {
  const piece = useSelector(selectCartPiece);
  const totalSum = useSelector(selectTotalSum);
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const { id } = route.params;
  const { loading, error, data } = useFetch(`${API_URL}/${route.params.id}`);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

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

        <Button
          onPress={() => {
            dispatch(setCartPiece(piece + 1));
            dispatch(setTotalSum(totalSum + data.price));
          }}
          text="Add to Cart"
        />
        <Button
          onPress={() => {
            dispatch(setFavorites([...favorites, data]));
          }}
          text={
            <View style={styles.button}>
              <View style={styles.buttonItem}>
                <Feather name="heart" size={24} color="black" />
              </View>
              <View style={styles.buttonItem}>
                <Text>Add To Favorites</Text>
              </View>
            </View>
          }
        />
      </View>
    </ScrollView>
  );
};

export default Detail;
