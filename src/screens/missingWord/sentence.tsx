import { useTheme } from "@react-navigation/native";
import React, { Fragment, useEffect, useState } from "react";
import { Block, BlockProps, Text } from "../../components";
import { Answer } from "./answer";
import { Word } from "./word";
import { useSelector } from "react-redux";

export interface SentenceProps {
  text: string;
  wordHided: string;
  selectedAnswer: string;
  biggestLength: number;
}

export function Sentence({
  text,
  wordHided,
  selectedAnswer,
  biggestLength,
}: SentenceProps) {
  // theme
  const { colors } = useTheme() as AppTheme;

  // redux
  const {
    firebase: { dictionaries },
  } = useSelector((state) => state) as AppRootState;

  // state
  const [words, setWords] = useState<Array<string>>([]);

  useEffect(() => {
    const arr = text.split(" ");
    setWords(arr);
  }, [text]);
  return (
    <Block
      row
      margin={[8, 0]}
      alignEnd
      justifyCenter
      style={{
        flexWrap: "wrap",
      }}
    >
      {words.map((word, index) => {
        if (word !== wordHided)
          return (
            <Word
              key={index.toString()}
              text={word}
              textTranslated={
                Object.keys(dictionaries).includes(word)
                  ? dictionaries[word]
                  : ""
              }
              showDot={Object.keys(dictionaries).includes(word)}
            />
          );
        return (
          <BlockAnswer key={index.toString()} biggestLength={biggestLength}>
            {selectedAnswer ? (
              <Answer text={selectedAnswer} fontFamily={"h6"} />
            ) : (
              <Word text={new Array(biggestLength * 3).join(" ")} showDot />
            )}
          </BlockAnswer>
        );
      })}
    </Block>
  );
}

interface BlockAnswerProps extends BlockProps {
  biggestLength: number;
}
function BlockAnswer({ biggestLength, ...rest }: BlockAnswerProps) {
  return <Block width={biggestLength * 12} {...rest} />;
}
