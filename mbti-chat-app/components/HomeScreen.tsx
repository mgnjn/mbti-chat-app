import React from "react";
import { View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Click to home."
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default HomeScreen;
