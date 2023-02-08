import * as React from "react";
import { View, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = ({ route, navigation }: Props) => {
  return (
    <View>
      <Button title="Click to exit." onPress={() => navigation.push("Exit")} />
    </View>
  );
};

export default HomeScreen;
