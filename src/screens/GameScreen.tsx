import { useTheme } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Animated } from "react-native";
import { Block } from "../components";
import layout from "../constants/styles/layout";
import { MissingWordQuestion } from "./missingWord/question";
import {
  QUESTION_ANIMATION_TIME,
  QUESTION_HEIGHT,
  QUESTION_INITIAL_BOTTOM,
} from "./style";
import { getDatabase, ref, onValue } from "firebase/database";
import { FirebaseExample } from "../types";
import { shuffle } from "../utils/array";

export function GameScreen({}) {
  // theme
  const { colors } = useTheme() as AppTheme;
  // state
  const [bottom] = useState(new Animated.Value(QUESTION_INITIAL_BOTTOM));

  const [examples, setExamples] = useState<Array<FirebaseExample>>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const db = getDatabase();
    const reference = ref(db, "examples");
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
      setExamples(Object.values(data));
    });
  }, []);

  useEffect(() => {
    if (examples.length) {
      Animated.timing(bottom, {
        toValue: 0,
        duration: QUESTION_ANIMATION_TIME,
        useNativeDriver: false,
      }).start(() => {});
    }
  }, [examples, index]);

  const getAnswers = () => {
    const len = examples.length;
    if (len)
      return shuffle([
        examples[index].word_de,
        examples[(index + 1) % len].word_de,
        examples[(index + 2) % len].word_de,
        examples[(index + 3) % len].word_de,
      ]);
    return [];
  };

  const onPressNext = (word: string, sucess: boolean, answer: string) => {
    // save results
    Animated.timing(bottom, {
      toValue: QUESTION_INITIAL_BOTTOM,
      duration: QUESTION_ANIMATION_TIME,
      useNativeDriver: false,
    }).start(() => {
      setIndex(index + 1);
    });
  };

  return (
    <Block flex={1} color={colors.background}>
      <Animated.View
        style={{
          position: "absolute",
          bottom,
          height: QUESTION_HEIGHT,
          width: layout.window.width,
        }}
      >
        {examples.length && examples.length > index ? (
          <MissingWordQuestion
            key={`missingWord-${index}`}
            answers={getAnswers()}
            sentenceDe={examples[index].sentence_de}
            sentenceEn={examples[index].sentence_en}
            wordDe={examples[index].word_de}
            wordEn={examples[index].word_en}
            onPressNextQuestion={onPressNext}
          />
        ) : null}
      </Animated.View>
    </Block>
  );
}
