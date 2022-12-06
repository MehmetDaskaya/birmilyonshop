import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { auth } from "../../../../api/firebase";
import { useDispatch } from "react-redux";
import { setSignedIn } from "../../../../store/slices/navSlice";

import styles from "./SignIn.style";
import SignUp from "../SignUp";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Product");
      }
    });

    return unsubscribe;
  }, []);

  const handleSignIn = () => {
    auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
      const user = userCredential.user;

      if (user.metadata.creationTime !== null) {
        dispatch(setSignedIn(true));
      }
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={{ alignSelf: "center" }}></View>

      <View>
        <Text style={styles.title}>Login</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your email address"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />

        <TouchableOpacity style={styles.forgotPassword}>
          <Text>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.buttonSecondary]}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.text}>Do not have an account?</Text>
          <Text style={styles.textSecondary}>Create one</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
