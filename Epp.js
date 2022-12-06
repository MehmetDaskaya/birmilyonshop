import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LogBox, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider, useSelector } from "react-redux";
import { store } from "./store/store";
import { selectSignedIn } from "./store/slices/navSlice";

import Products from "./src/pages/Products/Products";
import Detail from "./src/pages/Detail/Detail";
import Search from "./src/pages/Search/Search";
import SignIn from "./src/pages/Authentication/SignIn";
import SignUp from "./src/pages/Authentication/SignUp";

LogBox.ignoreAllLogs();

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const TabsNavigator = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Tabs.Navigator>
          <Tabs.Screen name="Products" component={Products} />
          <Tabs.Screen name="Search" component={Search} />
        </Tabs.Navigator>
      </SafeAreaProvider>
    </Provider>
  );
};

const App = () => {
  const signedIn = useSelector(selectSignedIn);

  return (
    <>
      {
        <KeyboardAvoidingView>
          <NavigationContainer>
            <Stack.Navigator>
              {console.log(signedIn)}
              {signedIn == true ? (
                <>
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
                    component={TabsNavigator}
                    options={{
                      headerShown: false,
                    }}
                  />
                  <Stack.Screen
                    name="Detail"
                    component={Detail}
                    options={{
                      title: "Detail",
                      headerStyle: { backgroundColor: "#fc6603" },
                      headerTintColor: "#fff",
                      headerTitleStyle: { fontWeight: "bold" },
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
                </>
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </KeyboardAvoidingView>
      }
    </>
  );
};

export default AppWrapper;
