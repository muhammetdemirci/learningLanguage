import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  Block,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "../../components";

export interface AnswerProps extends TouchableOpacityProps {
  text: string;
  selected?: boolean;
  fontFamily?: FontFamily;
}

export function Answer({
  text,
  selected,
  fontFamily = "h5",
  ...rest
}: AnswerProps) {
  // theme
  const { colors } = useTheme() as AppTheme;

  return (
    <TouchableOpacity
      color={colors.text}
      height={48}
      margin={8}
      padding={[8, 12]}
      borderRadius={16}
      alignCenter
      justifyCenter
      disabled={selected}
      {...rest}
    >
      {selected ? (
        <Block
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            zIndex: 9,
            borderRadius: 16,
            backgroundColor: "rgb(100,147,167)",
          }}
        />
      ) : null}
      <Text fontFamily={fontFamily} color={colors["background-game"]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
