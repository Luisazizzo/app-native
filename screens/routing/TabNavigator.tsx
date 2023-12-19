import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Home/Home";
import Favorite from "../Favorite/Favorite";
import Profile from "../Profile/Profile";
import { EnumRoutes } from "../../constants/enumRoutes";
import Search from "../Search/Search";
import useRenderIcon from "./hook/useRenderIcon";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const renderIcon = useRenderIcon();
  return (
    <Tab.Navigator
      initialRouteName={EnumRoutes.DASHBOARD}
      screenOptions={{
        tabBarStyle: { backgroundColor: "#141414" },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "#fff",
        tabBarHideOnKeyboard: false,
      }}
    >
      <Tab.Screen
        name={EnumRoutes.DASHBOARD}
        component={Home}
        options={{
          tabBarIcon: () => renderIcon("home-outline"),
        }}
      />
      <Tab.Screen
        name={EnumRoutes.FAVORITE}
        component={Favorite}
        options={{
          tabBarIcon: () => renderIcon("cards-heart-outline"),
        }}
      />
      <Tab.Screen
        name={EnumRoutes.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: () => renderIcon("account-outline"),
        }}
      />
      <Tab.Screen
        name={EnumRoutes.SEARCH}
        component={Search}
        options={{
          tabBarIcon: () => renderIcon("database-search-outline"),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
