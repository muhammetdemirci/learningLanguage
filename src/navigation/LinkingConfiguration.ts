/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends UserStackParamList {}
  }

  // User
  type UserStackParamList = {
    Game: undefined;
  };

  type UserStackScreenProps<Screen extends keyof UserStackParamList> =
    NativeStackScreenProps<UserStackParamList, Screen>;
  // end User
}

export const USER_NAVIGATION_CONFIG: LinkingOptions<UserStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Game: "Game",
    },
  },
};
