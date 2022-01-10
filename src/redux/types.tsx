// redux constants

// base
export const RESET_REDUCER = (stateKey: string) => `${stateKey}_RESET_REDUCER`;
export const CHANGE_REDUCER = (stateKey: string) =>
  `${stateKey}_CHANGE_REDUCER`;

// reducers
export const REDUCERS = {
  app: "app",
  status: "status",
  gameResult : "gameResult"
};
