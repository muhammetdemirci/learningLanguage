import { useTheme } from "@react-navigation/native";
import React, { Fragment, useEffect, useState } from "react";
import { Block, Text } from "../../components";
import { Word } from "./word";

export interface SentenceProps {
  text: string;
}

export function Sentence({ text }: SentenceProps) {
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
      {words.map((word, index) => (
        <Word key={index.toString()} text={word} />
      ))}
    </Block>
  );
}
