import React from "react";
import { View, Button } from "react-native";
import { ExitScreenProps } from "../navigation/types";

const ExitScreen = ({ navigation }: ExitScreenProps) => {
  return (
    <View>
      <Button
        title="Click to home."
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export { ExitScreen };
