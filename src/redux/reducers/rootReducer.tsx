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

interface FirebaseReducerProps {
  examples: Array<FirebaseExample>;
  dictionaries: any;
}
const firebase = initReducer(REDUCERS.firebase, {
  results: [],
  dictionaries: {},
});

declare global {
  interface AppRootState {
    app: AppReducerProps;
    status: StatusReducerProps;
    gameResult: GameResultReducerProps;
    firebase: FirebaseReducerProps;
  }
}

// combine all reducers
const rootReducer = combineReducers<AppRootState>({
  app,
  status,
  gameResult,
  firebase,
});

export default rootReducer;
