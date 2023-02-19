import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type BottomTabParamList = {
  HomeDrawer: NativeStackScreenProps<HomeDrawerParamList>;
  Messages: undefined;
};

export type HomeDrawerParamList = {
  Home: undefined;
  Profile: undefined;
};

export type HomeScreenProps = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, "Home">,
  BottomTabScreenProps<BottomTabParamList, "HomeDrawer">
>;

export type ProfileScreenProps = DrawerScreenProps<
  HomeDrawerParamList,
  "Profile"
>;

/* 
- each navigator (left drawer/bottom tab) has screens. for ts, 
  we need to define the types of the screens (and their paramters)
*/
