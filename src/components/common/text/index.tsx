import React from "react";
import { TextBase, TextBaseProps } from "./base";
import { withMarginAndPaddingProps } from "../hocs";
import { FONT_STYLES } from "../../../constants/styles/font";
import { StyleProp, TextStyle } from "react-native";
import { useTheme } from "@react-navigation/native";

export interface TextProps extends TextBaseProps, withMarginAndPaddingProps {
  fontFamily:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "title"
    | "subtitle"
    | "button"
    | "link"
    | "body1"
    | "body2"
    | "helper"
    | "caption"
    | "overline"
    | "label";

  align?: "auto" | "left" | "right" | "center" | "justify";
  transform?: "none" | "capitalize" | "uppercase" | "lowercase";

  color?: string;
  font?: string;
  style?: StyleProp<TextStyle>;
  children?: any; // TODO
}

export function Text(props: TextProps) {
  const { colors } = useTheme();

  const {
    fontFamily,

    align,
    transform,
    color,
    font,
    style,
    ...rest
  } = props;

  return (
    <TextBase
      style={[
        FONT_STYLES[fontFamily],
        align && { textAlign: align },
        transform && { textTransform: transform },
        { color: color ? color : colors.text },
        style,
      ]}
      {...rest}
    />
  );
}
