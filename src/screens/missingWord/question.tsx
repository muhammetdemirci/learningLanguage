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
import { useDispatch } from "react-redux";
import * as reduxActions from "../../redux/actions";
import { GameBaseBlock } from "../gameBaseBlock";

export interface MissingWordQuestionProps {
  answers: Array<string>;
  example: FirebaseExample;
  onPressNextQuestion: () => void;
}

export function MissingWordQuestion({
  answers,
  example,
  onPressNextQuestion,
}: MissingWordQuestionProps) {
  // props
  const { sentenceEn, sentenceDe, wordEn, wordDe } = example;

  // theme
  const { colors } = useTheme() as AppTheme;

  // redux
  const dispatch = useDispatch();

  // state
  const [selectedAnswer, setSelectedAnswer] = useState("");

  // animations
  const [resultbottom] = useState(new Animated.Value(RESULT_INITIAL_BOTTOM));

  const onPressContinue = () => {
    // Check result is true

    Animated.timing(resultbottom, {
      toValue: 0,
      duration: RESULT_ANIMATION_TIME,
      useNativeDriver: false,
    }).start(() => {});
  };

  const onPressNext = () => {
    Animated.timing(resultbottom, {
      toValue: RESULT_INITIAL_BOTTOM,
      duration: RESULT_ANIMATION_TIME,
      useNativeDriver: false,
    }).start(() => {
      dispatch(
        reduxActions.gameResult.saveResult({
          ...example,
          answer: selectedAnswer,
          success: selectedAnswer === wordDe,
        })
      );
      onPressNextQuestion();
    });
  };

  const findBiggestLength = () => {
    return answers.reduce(function (a, b) {
      return a.length > b.length ? a : b;
    });
  };

  return (
    <GameBaseBlock alignCenter>
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
            margin: 8,
          }}
          searchWords={[wordEn]}
          textToHighlight={sentenceEn}
        />
        <Sentence
          text={sentenceDe}
          wordHided={wordDe}
          selectedAnswer={selectedAnswer}
          biggestLength={findBiggestLength().length}
        />
        <Block
          margin={8}
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
        <ButtonContainer
          disabled={!selectedAnswer}
          text={"Continue"}
          onPress={onPressContinue}
        />
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
          onPressNext={onPressNext}
        />
      </Animated.View>
    </GameBaseBlock>
  );
}
