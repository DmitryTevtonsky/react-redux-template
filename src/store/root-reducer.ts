import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/es/storage";

import coreReducer from "features/core/redux/slice";

const corePersistConfig = {
  key: `${process.env.REACT_APP_NAME}:v${process.env.REACT_APP_VERSION}:core`,
  version: +`${process.env.REACT_APP_VERSION}`,
  storage,
  blacklist: ["status", "emojisData"],
};

const rootReducer = combineReducers({
  core: persistReducer(corePersistConfig, coreReducer),
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
