import { useTheme } from "@react-navigation/native";
import React from "react";
import { Block, Text } from "../../components";
import { RESULT_HEIGHT } from "../style";
import { ButtonContainer } from "../../components";
import { FontAwesome } from "@expo/vector-icons";
import layout from "../../constants/styles/layout";

export interface QuestionResultProps {
  answer: string;
  success: boolean;
  onPressNext: () => void;
}

export function QuestionResult({
  answer,
  success,
  onPressNext,
}: QuestionResultProps) {
  // theme
  const { colors } = useTheme() as AppTheme;

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
          {success ? "Great Job" : `Answer: ${answer}`}
        </Text>
        <FontAwesome name="flag" color={colors.text} />
      </Block>
      <ButtonContainer text="Continue" onPress={onPressNext} />
    </Block>
  );
}
