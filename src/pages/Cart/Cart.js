import {
  View,
  Text,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import styles from "./Cart.style";
import { useSelector } from "react-redux";
import {
  selectCartPiece,
  selectTotalSum,
  selectCart,
} from "../../../store/slices/cartSlice";

const Cart = () => {
  const cartSelector = useSelector(selectCart);
  const piece = useSelector(selectCartPiece);
  const totalSum = useSelector(selectTotalSum);
  return (
    <View style={styles.container}>
      <View style={styles.infoBox}>
        <Text>{piece} Items in the Cart</Text>
        <Text style={styles.priceBox}>${totalSum} in Total</Text>
      </View>

      <FavoritesCard data={cartSelector} />
    </View>
  );
};

export default Cart;

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
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <View style={styles.bodyContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={styles.priceBox}>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

// import { View, Text, FlatList, Image } from "react-native";
// import React from "react";
// import styles from "./Cart.style";
// import {
//   selectCartPiece,
//   selectTotalSum,
//   selectCart,
// } from "../../../store/slices/cartSlice";
// import { useSelector } from "react-redux";

// const Cart = () => {
//   const cartSelector = useSelector(selectCart);
//   const piece = useSelector(selectCartPiece);
//   const totalSum = useSelector(selectTotalSum);

//   return (
//     <View style={styles.container}>
//       <View>
//         <Text>{piece} Items in the Cart</Text>
//       </View>

//       <View>
//         <Text>${totalSum} in Total</Text>
//       </View>

//       <CartItemCard data={cartSelector} />
//     </View>
//   );
// };

// export default Cart;

// const CartItemCard = ({ data }) => {
//   const renderItem = ({ item }) => <CartItem item={item} />;
//   return (
//     <FlatList
//       data={data}
//       keyExtractor={(item) => item.id}
//       renderItem={renderItem}
//     />
//   );
// };

// const CartItem = ({ item }) => {
//   return (
//     <View style={styles.container}>
//       <Image style={styles.image} source={{ uri: item.image }} />
//       <View style={styles.bodyContainer}>
//         <Text style={styles.title}>{item.title}</Text>
//         <Text style={styles.price}>${item.price}</Text>
//       </View>
//     </View>
//   );
// };
