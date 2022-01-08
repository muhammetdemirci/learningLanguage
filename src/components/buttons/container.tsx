import { useTheme } from "@react-navigation/native";
import React, { Fragment } from "react";
import { Block, Text, TouchableOpacity, TouchableOpacityProps } from "..";
import layout from "../../constants/styles/layout";

export interface ButtonContainerProps extends TouchableOpacityProps {
  text: string;
}

export function ButtonContainer({ text }: ButtonContainerProps) {
  // theme
  const { colors } = useTheme() as AppTheme;

  return (
    <TouchableOpacity
      color={colors.text}
      margin={8}
      padding={[12, 16]}
      width={layout.window.width - 48}
      borderRadius={32}
      alignCenter
      justifyCenter
    >
      <Text fontFamily={"h5"} color={colors["background-game"]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
