import { useTheme } from "@react-navigation/native";
import React, { Fragment } from "react";
import { Block, Text, TouchableOpacity } from "../../components";

export interface WordTranslateProps {
  text: string;
}

export function WordTranslate({ text }: WordTranslateProps) {
  // theme
  const { colors } = useTheme() as AppTheme;

  return (
    <Block
      color={colors.text}
      padding={[6, 8]}
      borderRadius={10}
      alignCenter
      justifyCenter
    >
      <Text fontFamily={"h6"} color={colors["background-game"]}>
        {text}
      </Text>
    </Block>
  );
}
