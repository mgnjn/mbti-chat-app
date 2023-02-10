import React, { useEffect, useState } from "react";
import { View, Button, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { gql, useQuery } from "@apollo/client";
import { User } from "../types/schema-types";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const GET_USERS = gql`
  query {
    users {
      id
      firstName
      lastName
    }
  }
`;

function HomeScreen({ route, navigation }: Props) {
  const { error, data, loading } = useQuery(GET_USERS);

  if (loading) {
    console.log("Loading!");
    return <h1>Loading!</h1>;
  }

  //   @TODO: put this in useEffect
  const users: User[] = data.users;
  const currentUser: User = users[0];

  return (
    <View>
      <Text>Welcome {currentUser.firstName}</Text>
      <Button title="Click to exit" onPress={() => navigation.push("Exit")} />
    </View>
  );
}

export default HomeScreen;
