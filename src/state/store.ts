import { createStore } from "redux";
import rootReducer from "./rootReducer";

// tslint:disable
const storeEnhancers =
  window["__REDUX_DEVTOOLS_EXTENSION__"] &&
  window["__REDUX_DEVTOOLS_EXTENSION__"]();
// tslint:enable

const configureStore = () => createStore(rootReducer, storeEnhancers);

export { configureStore };
