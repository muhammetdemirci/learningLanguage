import { useTheme } from "@react-navigation/native";
import React from "react";
import { Block, Text } from "../../components";
import { GAME_HEIGHT, RESULT_HEIGHT } from "../style";
import HighlightText from "@sanar/react-native-highlight-text";
import { ButtonContainer } from "../../components";
import { FontAwesome } from "@expo/vector-icons";
import layout from "../../constants/styles/layout";

export interface QuestionResultProps {
  success: boolean;
}

export function QuestionResult({ success }: QuestionResultProps) {
  // theme
  const { colors } = useTheme() as AppTheme;

  const answers = ["folgen", "Schaf", "Bereiden", "Hause"];

  return (
    <Block
      height={RESULT_HEIGHT}
      color={success ? colors.correct : colors.wrong}
      padding={16}
      alignCenter
      style={{
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
      }}
    >
      <Block
        width={layout.window.width - 48}
        margin={[16, 0]}
        row
        alignCenter
        between
      >
        <Text fontFamily={"title"}>
          {success ? "Great Job" : "Answer: Hause"}
        </Text>
        <FontAwesome name="flag" color={colors.text} />
      </Block>
      <ButtonContainer text="Continue" />
    </Block>
  );
}
