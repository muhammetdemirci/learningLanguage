import { REDUCERS } from "../types";
import { ActionBase } from "./base";

class GameResultModel extends ActionBase {
  saveResult = (result: GameResultProps) => {
    return async (dispatch: any, getState: any) => {
      const {
        gameResult: { results },
      } = getState() as AppRootState;

      dispatch(
        this.changeReducer({
          results: [...results, result],
        })
      );
    };
  };
}

const gameResult = new GameResultModel(REDUCERS.gameResult);

export { gameResult };
