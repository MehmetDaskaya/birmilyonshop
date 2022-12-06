import { View, Alert, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useEffect } from "react";
import { auth } from "../../../api/firebase";
import { useDispatch } from "react-redux";
import { setSignedIn } from "../../../store/slices/navSlice";
import { setFilteredItem } from "../../../store/slices/itemSlice";
import styles from "./Search.style";

import axios from "axios";

const Search = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setSignedIn(null));
        navigation.navigate("Product");
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        placeholder="Search..."
        value={{}}
        onChangeText={{}}
      ></TextInput>
      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.searchText}>Search</Text>
      </TouchableOpacity>

      <Text>Search</Text>
      <View>
        <TouchableOpacity
          style={{ backgroundColor: "red" }}
          onPress={handleSignOut}
        >
          <Text>Çıkış Yap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;
