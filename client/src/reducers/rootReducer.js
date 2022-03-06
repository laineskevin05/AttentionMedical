import { combineReducers } from "redux";

import { authReducer } from "./authReducer";
import { configReducer } from "./configReducer";
import { citaReducer } from "./citaReducers"
 
export const rootReducer = combineReducers({
  auth: authReducer,
  config: configReducer,
  cita: citaReducer,
});
