import { createStore, applyMiddleware } from "redux";
// import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from "redux-persist";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",

  storage: AsyncStorage,

  whitelist: ["app"],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const logger = createLogger();

const store = createStore(
  persistedReducer,
  // applyMiddleware(thunkMiddleware, logger),
  applyMiddleware(thunkMiddleware)
);

let persistor = persistStore(store);

export { store, persistor };
