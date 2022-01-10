import React from "react";
import { Block, ButtonContainer } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { GameResultCard } from "./resultCard";
import { GameBaseBlock } from "../gameBaseBlock";
import { GameResultCardBase } from "./resultCardBase";
import { useTheme } from "@react-navigation/native";
import * as reduxActions from "../../redux/actions";

export interface GameResultScreenProps {
  onPressPlayAgain: () => void;
}

export function GameResultScreen({ onPressPlayAgain }: GameResultScreenProps) {
  // theme
  const { colors } = useTheme() as AppTheme;

  const dispatch = useDispatch();
  const {
    gameResult: { results },
  } = useSelector((state) => state) as AppRootState;

  return (
    <GameBaseBlock flex color={colors["background-game"]}>
      <Block flex margin={[16, 0]}>
        <GameResultCardBase
          left={"Word"}
          leftFontFamily={"button"}
          leftStyle={{
            color: colors.black,
          }}
          center={"Your Answer"}
          centerFontFamily={"button"}
          centerStyle={{
            color: colors.black,
          }}
          right={"Correct Answer"}
          rightFontFamily={"button"}
          rightStyle={{
            color: colors.black,
          }}
        />
        {results.map((result, index) => (
          <GameResultCard key={index.toString()} result={result} />
        ))}
      </Block>

      <ButtonContainer
        margin={[16, 0]}
        text={"Play again"}
        onPress={() => {
          dispatch(reduxActions.gameResult.resetReducer());
          onPressPlayAgain();
        }}
      />
    </GameBaseBlock>
  );
}
