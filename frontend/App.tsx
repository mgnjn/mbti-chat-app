import "react-native-gesture-handler";
import * as React from "react";
import { StyleSheet, Platform, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AppRegistry } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, ProfileScreen, MessagesScreen } from "./screens";
import { BottomTabParamList, HomeDrawerParamList } from "./navigation/types";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Tab = createBottomTabNavigator<BottomTabParamList>();
const HomeDrawer = createDrawerNavigator<HomeDrawerParamList>();

const address = Platform.OS === "android" ? `10.0.2.2` : "localhost";
const client = new ApolloClient({
  uri: `http://${address}:3000/graphql`,
  cache: new InMemoryCache(),
});

const HomeDrawerNavigator = () => {
  return (
    <HomeDrawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerPosition: "left",
      }}
    >
      <HomeDrawer.Screen name="Home" component={HomeScreen} />
      <HomeDrawer.Screen name="Profile" component={ProfileScreen} />
    </HomeDrawer.Navigator>
  );
};

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="HomeDrawer" component={HomeDrawerNavigator} />
          <Tab.Screen name="Messages" component={MessagesScreen} />
        </Tab.Navigator>
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

/* 
- URI changes depending on if you ahve android or on web
- can't see tab navigator on web for some reason?
*/
