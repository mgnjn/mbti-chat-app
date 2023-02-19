import { Image, ScrollView, Text, View, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import useUsers from "../../hooks/useUsers";
import { User } from "../../types/types";
import { ProfileScreenProps } from "../../navigation/types";

const ProfileScreen = ({ route, navigation }: ProfileScreenProps) => {
  const { loading, error, users } = useUsers();
  const [user, setUser] = useState<User>(); // temporary for now

  if (loading) return <Text> Loading</Text>;
  if (error) return <Text> Error!</Text>;

  useEffect(() => {
    setUser(users[0]);
  }, []);

  return (
    <ScrollView style={styles.content}>
      <View style={styles.top}>
        <Image
          style={styles.avatar}
          source={require("../../assets/icon.png")}
        />
        <View style={styles.header}>
          <Text style={styles.headerText}> {user?.firstName}</Text>
          <Text> {user?.lastName}</Text>
          <Text> {user?.mbti}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: "column",
    // height: "100%",r
    padding: 10,
    backgroundColor: "blue",
  },
  top: {
    flexDirection: "row",
    marginVertical: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 6,
  },
  header: {
    width: "100%",
    marginLeft: 15,
    flexDirection: "column",
    backgroundColor: "black",
  },
  headerText: {
    fontSize: 30,
    color: "red",
  },
});

export { ProfileScreen };

// context: if contxt value chagnes, subscribers of context will need to re-render.
// want to try to minimize Context since can clutter code
