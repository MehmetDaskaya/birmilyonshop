import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SimpleLineIcons, Feather } from "@expo/vector-icons";
import styles from "./NavBar.style";
import { useNavigation } from "@react-navigation/native";

const NavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navBar}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/birmilyonlogo.png")}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate("Search")}
        style={styles.navBarTitle}
      >
        <SimpleLineIcons name="magnifier" size={20} color="black" />
        <Text style={styles.navBarTitle}> Search </Text>
      </TouchableOpacity>

      <View style={styles.navBarRight}>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Feather
            style={styles.text}
            name="shopping-cart"
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavBar;
