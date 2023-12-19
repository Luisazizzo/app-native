import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "../Auth/Auth";
import Details from "../Details/Details";
import TabNavigator from "./TabNavigator";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { EnumRoutes } from "../../constants/enumRoutes";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  const userData = useSelector((state: RootState) => state.user);

  return (
    <Stack.Navigator>
      {userData.isLogged ? (
        <>
          <Stack.Screen
            name={EnumRoutes.HOME}
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name={EnumRoutes.DETAILS} component={Details} />
        </>
      ) : (
        <Stack.Screen
          name={EnumRoutes.BASE}
          component={Auth}
          options={{ title: "Auth Page" }}
        />
      )}
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
