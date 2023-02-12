import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Profile } from "./Profile";
const Drawer = createDrawerNavigator();

const LeftDrawer = () => {
  return (
    <>
      <Drawer.Navigator initialRouteName="LeftDrawer">
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </>
  );
};

export { LeftDrawer };
