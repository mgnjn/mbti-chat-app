import React from "react";
import { View, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Exit">;

const ExitScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Button
        title="Click to home."
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default ExitScreen;
