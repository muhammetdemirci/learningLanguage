import { useTheme } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Animated } from "react-native";
import { Block } from "../components";
import layout from "../constants/styles/layout";
import { MissingWordQuestion } from "./missingWord/question";
import { GAME_HEIGHT } from "./style";

const INITIAL_BOTTOM = -1 * GAME_HEIGHT;
// const INITIAL_BOTTOM = 0;
const ANIMATION_TIME = 300;

export function GameScreen({}) {
  // theme
  const { colors } = useTheme() as AppTheme;
  // state
  const [bottom] = useState(new Animated.Value(INITIAL_BOTTOM));

//   useEffect(() => {
//     Animated.timing(bottom, {
//       toValue: 0,
//       duration: ANIMATION_TIME,
//       useNativeDriver: false,
//     });
//     // else
//     //   Animated.timing(top, {
//     //     toValue: initialTop,
//     //     duration: TIME_APP_MENU,
//     //     useNativeDriver: false,
//     //   }).start(() => {
//     //     setIsOpen(false);
//     //   });
//   }, []);

  return (
    <Block flex={1} color={colors.background}>
      <Animated.View
        style={{
          position: "absolute",
          bottom,
          height: GAME_HEIGHT,
          width: layout.window.width,
        }}
      >
        <MissingWordQuestion />
      </Animated.View>
    </Block>
  );
}
