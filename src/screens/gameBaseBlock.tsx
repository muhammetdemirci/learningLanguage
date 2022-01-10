import { useTheme } from "@react-navigation/native";
import React from "react";
import { Block, BlockProps } from "../components";

export interface GameBaseBlockProps extends BlockProps {}

export function GameBaseBlock({ ...rest }: GameBaseBlockProps) {
  // theme
  const { colors } = useTheme() as AppTheme;

  return (
    <Block
      flex
      color={colors["background-game"]}
      padding={16}
      style={{
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
      }}
      {...rest}
    />
  );
}
