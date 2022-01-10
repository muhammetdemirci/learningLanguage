import { useTheme } from "@react-navigation/native";
import React from "react";
import { Block, Text } from "../../components";

export interface WordTranslateProps {
  text?: string;

  hide?: boolean;
}

export function WordTranslate({ text, hide }: WordTranslateProps) {
  // theme
  const { colors } = useTheme() as AppTheme;

  return (
    <Block
      color={hide ? colors["background-game"] : colors.text}
      padding={4}
      borderRadius={10}
      alignCenter
      justifyCenter
    >
      <Text fontFamily={"h7"} color={colors["background-game"]}>
        {text}
      </Text>
    </Block>
  );
}
