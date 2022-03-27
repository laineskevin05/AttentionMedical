import { combineReducers } from "redux";

import { authReducer } from "./authReducer";
import { configReducer } from "./configReducer";
import { citaReducer } from "./citaReducers"
import { profileReducer } from "./profileReducer";
import { doctorReducer } from "./doctorReducer";
import { hospitalReducer } from "./hospitalReducer";
 
export const rootReducer = combineReducers({
  auth: authReducer,
  config: configReducer,
  cita: citaReducer,
  profile: profileReducer,
  doctor: doctorReducer,
  hospital: hospitalReducer,
});
