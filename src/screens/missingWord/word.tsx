import { useTheme } from "@react-navigation/native";
import React, { Fragment, useState } from "react";
import { View } from "react-native";
import { Block, Text, TouchableOpacity } from "../../components";
import { WordTranslate } from "./wordTranslate";

export interface WordProps {
  text: string;
  textTranslated?: string;
}

export function Word({ text, textTranslated }: WordProps) {
  // theme
  const { colors } = useTheme() as AppTheme;

  const [showTranslate, setShowTranslate] = useState(false);

  return (
    <Block margin={8} height={80}>
      <Block flex>
        {textTranslated && showTranslate ? (
          <WordTranslate text={textTranslated} />
        ) : null}
      </Block>
      <TouchableOpacity
        margin={6}
        onPress={() => setShowTranslate(!showTranslate)}
      >
        <Text fontFamily={"h6"} color={colors.text} style={{}}>
          {text}
        </Text>
      </TouchableOpacity>
      <Block
        style={{
          height: 1,
          width: "100%",
          borderRadius: 1,
          borderWidth: 1,
          borderColor: colors.text,
          borderStyle: "dotted",
        }}
      />
    </Block>
  );
}
