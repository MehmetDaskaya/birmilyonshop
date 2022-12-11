import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./ProductCard.style";
import { Feather } from "@expo/vector-icons";

const ProductCard = ({ product, onSelect, addToFav }) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: product.image }} />
        <View style={styles.bodyContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{product.title}</Text>
            <TouchableOpacity
              onPress={() => addToFav(product)}
              style={styles.favButton}
            >
              <Feather name="heart" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.priceBox}>
            <Text style={styles.price}>${product.price}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;
