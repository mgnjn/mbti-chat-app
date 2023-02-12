import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { LeftDrawerProps } from "../navigation/types";

import { Profile } from "./Profile";
import { HomeScreen } from "./HomeScreen";

const Drawer = createDrawerNavigator();

const LeftDrawer = ({ navigation }: LeftDrawerProps) => {
  return (
    <>
      <Drawer.Navigator>
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </>
  );
};

export { LeftDrawer };
