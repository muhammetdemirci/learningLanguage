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

declare global {
  // Infer the `RootState` and `AppDispatch` types from the store itself
  type RootState = ReturnType<typeof store.getState>;

  // Inferred type
  type AppDispatch = typeof store.dispatch;
}

export { store, persistor };
