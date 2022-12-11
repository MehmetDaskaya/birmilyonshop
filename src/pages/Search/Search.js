import { View, Alert, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { auth } from "../../../api/firebase";
import { useDispatch } from "react-redux";
import { setSignedIn } from "../../../store/slices/navSlice";
import styles from "./Search.style";

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

      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            alignSelf: "center",
            padding: 20,
            marginTop: 440,
          }}
          onPress={handleSignOut}
        >
          <Text>Exit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;
