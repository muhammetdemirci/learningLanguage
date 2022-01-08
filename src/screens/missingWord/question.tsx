import { useTheme } from "@react-navigation/native";
import React from "react";
import { Block, Text } from "../../components";
import { GAME_HEIGHT } from "../style";
import HighlightText from "@sanar/react-native-highlight-text";

export interface MissingWordQuestionProps {}

export function MissingWordQuestion({}: MissingWordQuestionProps) {
  // theme
  const { colors } = useTheme() as AppTheme;

  return (
    <Block
      height={GAME_HEIGHT}
      color={colors["background-game"]}
      padding={16}
      alignCenter
      style={{
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
      }}
    >
      <Text margin={[16, 0]} fontFamily={"body1"}>
        Fill in the missing word
      </Text>

      <HighlightText
        highlightStyle={{
          fontFamily: "Roboto-Bold",
          textDecorationLine: "underline",
        }}
        style={{
          color: colors.text,
          fontFamily: "Roboto-Regular",
          fontSize: 24,
          margin: 16,
        }}
        searchWords={["house"]}
        textToHighlight={"The house is small"}
      />
    </Block>
  );
}
