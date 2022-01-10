import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { Block, Text, TouchableOpacity } from "../../components";
import { WordTranslate } from "./wordTranslate";

export interface WordProps {
  text: string;
  textTranslated?: string;

  showDot?: boolean;
}

export function Word({ text, textTranslated, showDot }: WordProps) {
  // theme
  const { colors } = useTheme() as AppTheme;

  const [showTranslate, setShowTranslate] = useState(false);

  const getBiggerLength = () => {
    if (textTranslated && textTranslated.length > text.length)
      return textTranslated.length;
    return text.length;
  };

  const width = getBiggerLength();
  return (
    <Block margin={[8, 6]} height={48}>
      <Block flex>
        {textTranslated ? (
          <WordTranslate text={textTranslated} hide={!showTranslate} />
        ) : null}
      </Block>
      <TouchableOpacity
        margin={[0, 6]}
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
          borderWidth: showDot ? 1 : 0,
          borderColor: colors.text,
          borderStyle: "dotted",
        }}
      />
    </Block>
  );
}
