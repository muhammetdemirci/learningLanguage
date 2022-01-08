import { useTheme } from "@react-navigation/native";
import React, { Fragment } from "react";
import {
  Block,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "../../components";

export interface AnswerProps extends TouchableOpacityProps {
  text: string;
}

export function Answer({ text }: AnswerProps) {
  // theme
  const { colors } = useTheme() as AppTheme;

  return (
    <TouchableOpacity
      color={colors.text}
      margin={8}
      padding={[12,16]}
      borderRadius={16}
      alignCenter
      justifyCenter
    >
      <Text fontFamily={"h5"} color={colors["background-game"]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
