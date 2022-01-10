import { useTheme } from "@react-navigation/native";
import React from "react";
import { GameResultCardBase } from "./resultCardBase";

export interface GameResultCardProps {
  result: GameResultProps;
}

export function GameResultCard({ result }: GameResultCardProps) {
  // theme
  const { colors } = useTheme() as AppTheme;

  return (
    <GameResultCardBase
      left={result.wordEn}
      leftStyle={{
        color: result.success ? colors.correct : colors.wrong,
      }}
      leftFontFamily={"button"}
      center={result.answer}
      centerStyle={{
        color: result.success ? colors.correct : colors.wrong,
      }}
      centerFontFamily={"button"}
      right={result.wordDe}
      rightStyle={{
        color: result.success ? colors.correct : colors.wrong,
      }}
      rightFontFamily={"button"}
    />
  );
}
