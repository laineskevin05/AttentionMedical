import { combineReducers } from "redux";

import { authReducer } from "./authReducer";
import { configReducer } from "./configReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  config: configReducer,
});
