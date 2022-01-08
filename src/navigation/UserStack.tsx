/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { GameScreen } from "../screens/GameScreen";

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<UserStackParamList>();

export function UserStackNavigator() {
  return (
    <React.Fragment>
      <Stack.Navigator
        initialRouteName={"Game"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={"Game"} component={GameScreen} />
      </Stack.Navigator>
    </React.Fragment>
  );
}
