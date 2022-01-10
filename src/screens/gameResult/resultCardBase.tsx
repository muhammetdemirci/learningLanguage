import { useTheme } from "@react-navigation/native";
import React from "react";
import { TextStyle } from "react-native";
import { Block, BlockProps, Text } from "../../components";

export interface GameResultCardBaseProps extends BlockProps {
  left?: string;
  center?: string;
  right?: string;

  leftStyle?: TextStyle;
  centerStyle?: TextStyle;
  rightStyle?: TextStyle;

  leftFontFamily?: FontFamily;
  centerFontFamily?: FontFamily;
  rightFontFamily?: FontFamily;
}

export function GameResultCardBase({
  left,
  center,
  right,

  leftStyle,
  centerStyle,
  rightStyle,

  leftFontFamily = "label",
  centerFontFamily = "label",
  rightFontFamily = "label",

  ...rest
}: GameResultCardBaseProps) {
  // theme
  const { colors } = useTheme() as AppTheme;

  return (
    <Block
      color={colors.card}
      row
      between
      margin={[4, 0]}
      padding={8}
      borderRadius={8}
      {...rest}
    >
      <Block flex>
        <Text
          color={colors.primary}
          fontFamily={leftFontFamily}
          style={leftStyle}
          align={"center"}
        >
          {left}
        </Text>
      </Block>
      <Block flex>
        <Text
          color={colors.primary}
          fontFamily={centerFontFamily}
          style={centerStyle}
          align={"center"}
        >
          {center}
        </Text>
      </Block>
      <Block flex>
        <Text
          color={colors.primary}
          fontFamily={rightFontFamily}
          style={rightStyle}
          align={"center"}
        >
          {right}
        </Text>
      </Block>
    </Block>
  );
}
