import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Exit: undefined;
  LeftDrawer: NavigatorScreenParams<LeftDrawerParamList>;
};

export type LeftDrawerParamList = {
  Profile: undefined;
};

export type ExitScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Exit"
>;

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;

export type LeftDrawerProps = NativeStackScreenProps<
  RootStackParamList,
  "LeftDrawer"
>;
