import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import styles from "./Favorites.style";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../../store/slices/itemSlice";

const Favorites = () => {
  const favSelector = useSelector(selectFavorites);
  return (
    <View>
      <FavoritesCard data={favSelector} />
    </View>
  );
};

export default Favorites;

const FavoritesCard = ({ data }) => {
  const renderItem = ({ item }) => <FavoritesCardItem item={item} />;
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

const FavoritesCardItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </View>
  );
};
