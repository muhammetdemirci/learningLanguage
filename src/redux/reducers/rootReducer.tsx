import { combineReducers } from "redux";
import { REDUCERS } from "../types";
import { initReducer } from "./base";

// reducers
interface AppReducerProps {
  firstOpen: boolean;
  theme: "light" | "dark";

  // from api
  forceUpdate: boolean;
  iosUrl: string;
  androidUrl: string;
}
const app = initReducer(REDUCERS.app, {
  firstOpen: true,
  theme: "light",

  forceUpdate: false,
  iosUrl: "",
  androidUrl: "",
});

interface StatusReducerProps {}
const status = initReducer(REDUCERS.status, {});

interface GameResultReducerProps {
  results: Array<GameResultProps>;
}
const gameResult = initReducer(REDUCERS.gameResult, {
  results: [],
});

declare global {
  interface AppRootState {
    app: AppReducerProps;
    status: StatusReducerProps;
    gameResult: GameResultReducerProps;
  }
}

// combine all reducers
const rootReducer = combineReducers<AppRootState>({
  app,
  status,
  gameResult,
});

export default rootReducer;
