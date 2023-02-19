import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { HomeScreenProps } from "../../navigation/types";
import { User } from "../../types/types";
import useUsers from "../../hooks/useUsers";

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View>
      <Text>Welcome Home</Text>
    </View>
  );
};

/* 
download android studio + sdk
download adb
create a device
set up ANDROID_SDK 
run android emualtor on expo client
*/

/* need to have emulator running + run expo client */
export { HomeScreen };
