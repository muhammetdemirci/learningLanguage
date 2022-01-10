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
        examples[index].wordDe,
        examples[(index + 1) % len].wordDe,
        examples[(index + 2) % len].wordDe,
        examples[(index + 3) % len].wordDe,
      ]);
    return [];
  };

  const onPressNext = () => {
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
            example={examples[index]}
            onPressNextQuestion={onPressNext}
          />
        ) : null}
      </Animated.View>
    </Block>
  );
}
