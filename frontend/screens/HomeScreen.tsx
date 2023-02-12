import React, { useEffect, useState } from "react";
import { View, Button, Text } from "react-native";
import { HomeScreenProps } from "../navigation/types";
import { useQuery } from "@apollo/client";
import { User } from "../types/types";
import { GET_USERS } from "../graphql/queries";

function HomeScreen({ navigation }: HomeScreenProps) {
  const { error, data, loading } = useQuery(GET_USERS);
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (!data) return;
    if (data?.getUsers) {
      const users: User[] = data.getUsers;
      setUsers(users);
      setUser(users[0]);
    }
  }, [data]);

  if (loading) return <Text>Loading!</Text>;

  return (
    <View>
      <Button
        title="Click to exit"
        onPress={() => navigation.navigate("Exit")}
      />
    </View>
  );
}

/* 
download android studio + sdk
download adb
create a device
set up ANDROID_SDK 
run android emualtor on expo client
*/

/* need to have emulator running + run expo client */
export { HomeScreen };
