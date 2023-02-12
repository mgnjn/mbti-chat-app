import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AppRegistry } from "react-native";

import { RootStackParamList } from "./navigation/types";

import { HomeScreen } from "./screens/HomeScreen";
import { ExitScreen } from "./screens/ExitScreen";
import { LeftDrawer } from "./screens/SideDrawer";

const Stack = createNativeStackNavigator<RootStackParamList>();

// setup for ApolloClient
const serverLink = "http://localhost:3000/graphql";
const client = new ApolloClient({
  uri: serverLink,
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LeftDrawer" component={LeftDrawer} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

AppRegistry.registerComponent("main", () => App);
