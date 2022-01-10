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
      color={colors.card}
      left={result.wordEn}
      leftStyle={{
        color: result.success ? colors.correct : colors.wrong,
      }}
      center={result.answer}
      centerStyle={{
        color: result.success ? colors.correct : colors.wrong,
      }}
      right={result.wordDe}
      rightStyle={{
        color: result.success ? colors.correct : colors.wrong,
      }}
    />
  );
}
