/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { USER_NAVIGATION_CONFIG } from "./LinkingConfiguration";

// theme
import { DefaultTheme } from "../constants/styles/theme";
import { UserStackNavigator } from "./UserStack";

// screens

export default function Navigation({}) {
  return (
    <NavigationContainer linking={USER_NAVIGATION_CONFIG} theme={DefaultTheme}>
      <UserStackNavigator />
    </NavigationContainer>
  );
}
