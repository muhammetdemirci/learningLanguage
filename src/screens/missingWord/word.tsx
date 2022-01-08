import { useTheme } from "@react-navigation/native";
import React, { Fragment, useState } from "react";
import { View } from "react-native";
import { Block, Text, TouchableOpacity } from "../../components";
import { WordTranslate } from "./wordTranslate";

export interface WordProps {
  text: string;
}

export function Word({ text }: WordProps) {
  // theme
  const { colors } = useTheme() as AppTheme;

  const [showTranslate, setShowTranslate] = useState(false);

  return (
    <Block justifyCenter alignCenter margin={[0, 6]}>
      <View style={{}}>
        {showTranslate ? <WordTranslate text={text} /> : null}
      </View>
      <TouchableOpacity
        margin={6}
        onPress={() => setShowTranslate(!showTranslate)}
      >
        <Text fontFamily={"h5"} color={colors.text} style={{}}>
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
