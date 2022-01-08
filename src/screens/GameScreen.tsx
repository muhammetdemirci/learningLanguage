import { useTheme } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Animated } from "react-native";
import { Block } from "../components";
import layout from "../constants/styles/layout";
import { MissingWordQuestion } from "./missingWord/question";
import { QuestionResult } from "./questionResult/questionResult";
import { GAME_HEIGHT, RESULT_HEIGHT } from "./style";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { FirebaseExample } from "../types";
import { shuffle } from "../utils/array";

const INITIAL_BOTTOM = -1 * GAME_HEIGHT;
// const INITIAL_BOTTOM = 0;
const ANIMATION_TIME = 300;

export function GameScreen({}) {
  // theme
  const { colors } = useTheme() as AppTheme;
  // state
  const [bottom] = useState(new Animated.Value(0));

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

  //   useEffect(() => {
  //     Animated.timing(bottom, {
  //       toValue: 0,
  //       duration: ANIMATION_TIME,
  //       useNativeDriver: false,
  //     });
  //   }, [examples]);

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
  getAnswers();
  return (
    <Block flex={1} color={colors.background}>
      <Animated.View
        style={{
          position: "absolute",
          bottom,
          height: GAME_HEIGHT,
          width: layout.window.width,
        }}
      >
        {examples.length ? (
          <MissingWordQuestion
            answers={getAnswers()}
            sentenceDe={examples[index].sentence_de}
            sentenceEn={examples[index].sentence_en}
            wordDe={examples[index].word_de}
            wordEn={examples[index].word_en}
          />
        ) : null}
      </Animated.View>
      <Animated.View
        style={{
          position: "absolute",
          bottom,
          height: RESULT_HEIGHT,
          width: layout.window.width,
        }}
      >
        <QuestionResult success />
      </Animated.View>
    </Block>
  );
}
