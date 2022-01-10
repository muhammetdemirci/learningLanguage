import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { Block, Text } from "../../components";
import {
  RESULT_ANIMATION_TIME,
  RESULT_HEIGHT,
  RESULT_INITIAL_BOTTOM,
} from "../style";
import HighlightText from "@sanar/react-native-highlight-text";
import { Sentence } from "./sentence";
import { Answer } from "./answer";
import { ButtonContainer } from "../../components";
import { Animated } from "react-native";
import layout from "../../constants/styles/layout";
import { QuestionResult } from "./questionResult";

export interface MissingWordQuestionProps {
  answers: Array<string>;
  sentenceEn: string;
  sentenceDe: string;
  wordEn: string;
  wordDe: string;
  onPressNextQuestion: (word: string, success: boolean, answer: string) => void;
}

export function MissingWordQuestion({
  answers,
  sentenceEn,
  sentenceDe,
  wordEn,
  wordDe,
  onPressNextQuestion,
}: MissingWordQuestionProps) {
  // theme
  const { colors } = useTheme() as AppTheme;

  // state
  const [selectedAnswer, setSelectedAnswer] = useState("");

  // animations
  const [resultbottom, setResultBottom] = useState(
    new Animated.Value(RESULT_INITIAL_BOTTOM)
  );

  const onPressContinue = () => {
    // Check result is true

    Animated.timing(resultbottom, {
      toValue: 0,
      duration: RESULT_ANIMATION_TIME,
      useNativeDriver: false,
    }).start(() => {
      console.log("re", resultbottom);
    });
  };

  const onPressNext = (success: boolean, selectedAnswer: string) => {
    Animated.timing(resultbottom, {
      toValue: RESULT_INITIAL_BOTTOM,
      duration: RESULT_ANIMATION_TIME,
      useNativeDriver: false,
    }).start(() => {
      onPressNextQuestion(wordEn, success, selectedAnswer);
    });
  };

  return (
    <Block
      flex
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
        <Sentence
          text={sentenceDe}
          wordHided={wordDe}
          selectedAnswer={selectedAnswer}
        />

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
        <ButtonContainer text={"Continue"} onPress={onPressContinue} />
      </Block>
      <Animated.View
        style={{
          position: "absolute",
          bottom: resultbottom,
          height: RESULT_HEIGHT,
          width: layout.window.width,
        }}
      >
        <QuestionResult
          answer={wordDe}
          success={selectedAnswer === wordDe}
          onPressNext={() =>
            onPressNext(selectedAnswer === wordDe, selectedAnswer)
          }
        />
      </Animated.View>
    </Block>
  );
}
