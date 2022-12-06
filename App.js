import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LogBox, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider, useSelector } from "react-redux";
import { store } from "./store/store";
import { selectSignedIn } from "./store/slices/navSlice";
import { Feather } from "@expo/vector-icons";

import SignIn from "./src/pages/Authentication/SignIn";
import SignUp from "./src/pages/Authentication/SignUp";
import Products from "./src/pages/Products/Products";
import Detail from "./src/pages/Detail/Detail";
import Search from "./src/pages/Search/Search";
import Cart from "./src/pages/Cart/Cart";

LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

const AppWrapper = ({ navigation }) => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const StackNavigator = () => {
  const signedIn = useSelector(selectSignedIn);

  return (
    <>
      {
        <KeyboardAvoidingView>
          <Stack.Navigator>
            {signedIn == null ? (
              <>
                <Stack.Screen
                  name="asdas"
                  component={Products}
                  options={{
                    title: "Sign In",
                    headerStyle: { backgroundColor: "#fc6603" },
                    headerTintColor: "#fff",
                    headerTitleStyle: { fontWeight: "bold" },
                  }}
                />
                <Stack.Screen
                  name="Sign In"
                  component={SignIn}
                  options={{
                    title: "Sign In",
                    headerStyle: { backgroundColor: "#fc6603" },
                    headerTintColor: "#fff",
                    headerTitleStyle: { fontWeight: "bold" },
                  }}
                />
                <Stack.Screen
                  name="Sign Up"
                  component={SignUp}
                  options={{
                    title: "Sign Up",
                    headerStyle: { backgroundColor: "#fc6603" },
                    headerTintColor: "#fff",
                    headerTitleStyle: { fontWeight: "bold" },
                  }}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="Products"
                  component={StackNavigator}
                  options={{
                    headerShown: false,
                  }}
                />
              </>
            )}
          </Stack.Navigator>
        </KeyboardAvoidingView>
      }
    </>
  );
};

const App = () => {
  const signedIn = useSelector(selectSignedIn);
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Product"
              component={signedIn == true ? Products : SignIn}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="Detail"
              component={Detail}
              options={{
                title: "Product Details",
                headerStyle: { backgroundColor: "#fc6603" },
                headerTintColor: "#fff",
                headerTitleStyle: { fontWeight: "bold" },
                headerTitleAlign: "center",
                headerRight: () => (
                  <TouchableOpacity style={styles.headerIcon}>
                    <Feather name="star" size={24} color="white" />
                  </TouchableOpacity>
                ),
              }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{
                title: "Search",
                headerStyle: { backgroundColor: "#fc6603" },
                headerTintColor: "#fff",
                headerTitleStyle: { fontWeight: "bold" },
              }}
            />
            <Stack.Screen
              name="Cart"
              component={Cart}
              options={{
                title: "Cart",
                headerStyle: { backgroundColor: "#fc6603" },
                headerTintColor: "#fff",
                headerTitleStyle: { fontWeight: "bold" },
                headerTitleAlign: "center",
                headerRight: () => (
                  <TouchableOpacity style={styles.headerIcon}>
                    <Feather name="trash" size={24} color="white" />
                  </TouchableOpacity>
                ),
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default AppWrapper;

const styles = StyleSheet.create({
  headerIcon: {
    marginHorizontal: 10,
  },
});

// <Stack.Navigator>
//   {signedIn == null ? (
//     <>
//       <Stack.Screen
//         name="Sign In"
//         component={SignIn}
//         options={{
//           title: "Sign In",
//           headerStyle: { backgroundColor: "#fc6603" },
//           headerTintColor: "#fff",
//           headerTitleStyle: { fontWeight: "bold" },
//         }}
//       />
//       <Stack.Screen
//         name="Sign Up"
//         component={SignUp}
//         options={{
//           title: "Sign Up",
//           headerStyle: { backgroundColor: "#fc6603" },
//           headerTintColor: "#fff",
//           headerTitleStyle: { fontWeight: "bold" },
//         }}
//       />
//     </>
//   ) : (
//     <>
//       <Stack.Screen
//         name="Products"
//         component={App}
//         options={{
//           headerShown: false,
//         }}
//       />
//     </>
//   )}
// </Stack.Navigator>
