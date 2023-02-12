import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Exit: undefined;
  LeftDrawer: NavigatorScreenParams<SideDrawerParamList>;
};

export type SideDrawerParamList = {
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
