import { REDUCERS } from "../types";
import { ActionBase } from "./base";

class GameResultModel extends ActionBase {}

const gameResult = new GameResultModel(REDUCERS.gameResult);

export { gameResult };
