import { useTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Block } from "../components";

export function GameScreen({}) {
  // theme
  const { colors } = useTheme() as AppTheme;
  // state
  console.warn("A");
  return <Block flex={1} color={colors.background}>

      
  </Block>;
}
