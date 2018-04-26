import { combineReducers } from "redux";

import { visitTimeReducer } from "./visitTime/visitTime";

const rootReducer = combineReducers({
  visitTime: visitTimeReducer
});

export default rootReducer;
