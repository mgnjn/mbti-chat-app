import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AppRegistry } from "react-native";
import { registerRootComponent } from "expo";
import HomeScreen from "./components/HomeScreen";
import ExitScreen from "./components/ExitScreen";

export type RootStackParamList = {
  Home: undefined;
  Exit: undefined;
};

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
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Exit" component={ExitScreen} />
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

export default registerRootComponent(App);
