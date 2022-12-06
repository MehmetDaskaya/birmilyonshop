import { View, Text } from "react-native";
import React from "react";
import styles from "./Cart.style";
import {
  selectCartPiece,
  selectTotalSum,
} from "../../../store/slices/cartSlice";
import { useSelector } from "react-redux";

const Cart = () => {
  const piece = useSelector(selectCartPiece);
  const totalSum = useSelector(selectTotalSum);

  return (
    <View style={styles.container}>
      <View>
        <Text>{piece} Items in the Cart</Text>
      </View>

      <View>
        <Text>${totalSum} in Total</Text>
      </View>
    </View>
  );
};

export default Cart;
