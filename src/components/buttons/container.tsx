import { useTheme } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "../common";
import layout from "../../constants/styles/layout";

export interface ButtonContainerProps extends TouchableOpacityProps {
  text: string;
}

export function ButtonContainer({ text, ...rest }: ButtonContainerProps) {
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
      {...rest}
    >
      <Text fontFamily={"h5"} color={colors["background-game"]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
