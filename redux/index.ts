import { createStore, applyMiddleware } from "redux";
import combineReducers from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
// @ts-ignore
import logger from "redux-logger";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger];

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, combineReducers);

const configureAppStore = () => {
  const store = createStore(
    persistedReducer,
    undefined,
    applyMiddleware(...middleware)
  );
  let persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};

export type IRootState = ReturnType<typeof combineReducers>

export default configureAppStore;
