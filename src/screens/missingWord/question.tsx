import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { Block, Text } from "../../components";
import { GAME_HEIGHT } from "../style";
import HighlightText from "@sanar/react-native-highlight-text";
import { Sentence } from "./sentence";
import { Answer } from "./answer";
import { ButtonContainer } from "../../components";

export interface MissingWordQuestionProps {
  answers: Array<string>;
  sentenceEn: string;
  sentenceDe: string;
  wordEn: string;
  wordDe: string;
}

export function MissingWordQuestion({
  answers,
  sentenceEn,
  sentenceDe,
  wordEn,
  wordDe,
}: MissingWordQuestionProps) {
  // theme
  const { colors } = useTheme() as AppTheme;

  // state
  const [selectedAnswer, setSelectedAnswer] = useState("");

  return (
    <Block
      height={GAME_HEIGHT}
      color={colors["background-game"]}
      padding={16}
      alignCenter
      style={{
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
      }}
    >
      <Block flex alignCenter>
        <Text margin={[16, 0]} fontFamily={"body1"}>
          Fill in the missing word
        </Text>

        <HighlightText
          highlightStyle={{
            fontFamily: "Roboto-Bold",
            textDecorationLine: "underline",
          }}
          style={{
            color: colors.text,
            fontFamily: "Roboto-Regular",
            fontSize: 24,
            margin: 16,
          }}
          searchWords={[wordEn]}
          textToHighlight={sentenceEn}
        />
        <Sentence text={sentenceDe} wordHided={wordDe} selectedAnswer={selectedAnswer} />

        <Block
          margin={16}
          row
          alignCenter
          justifyCenter
          style={{
            flexWrap: "wrap",
          }}
        >
          {answers.map((answer, index) => (
            <Answer
              key={index.toString()}
              text={answer}
              selected={selectedAnswer === answer}
              onPress={() => setSelectedAnswer(answer)}
            />
          ))}
        </Block>
      </Block>
      <Block margin={[16, 0]}>
        <ButtonContainer text={"Continue"} />
      </Block>
    </Block>
  );
}
