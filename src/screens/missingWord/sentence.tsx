import { useTheme } from "@react-navigation/native";
import React, { Fragment, useEffect, useState } from "react";
import { Block, Text } from "../../components";
import { Answer } from "./answer";
import { Word } from "./word";

export interface SentenceProps {
  text: string;
  wordHided: string;
  selectedAnswer: string;
}

export function Sentence({ text, wordHided, selectedAnswer }: SentenceProps) {
  // theme
  const { colors } = useTheme() as AppTheme;

  // state
  const [words, setWords] = useState<Array<string>>([]);

  useEffect(() => {
    const arr = text.split(" ");
    setWords(arr);
  }, [text]);

  return (
    <Block row height={80} alignEnd>
      {words.map((word, index) => {
        if (word !== wordHided)
          return <Word key={index.toString()} text={word} />;
        else if (selectedAnswer)
          return <Answer key={index.toString()} text={selectedAnswer} />;
        else return <Word key={index.toString()} text={"        "} />;
      })}
    </Block>
  );
}
