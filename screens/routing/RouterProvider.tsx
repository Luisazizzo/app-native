import * as React from "react";
import HomeStackNavigator from "./HomeStackNavigator";
import { NavigationContainer } from "@react-navigation/native";

const RouterProvider = () => {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
};

export default RouterProvider;
