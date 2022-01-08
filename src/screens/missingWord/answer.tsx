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
  selected?: boolean;
}

export function Answer({ text, selected, ...rest }: AnswerProps) {
  // theme
  const { colors } = useTheme() as AppTheme;

  return (
    <TouchableOpacity
      color={colors.text}
      margin={8}
      padding={[12, 16]}
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
      <Text fontFamily={"h5"} color={colors["background-game"]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
