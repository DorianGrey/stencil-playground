import { createStore } from "redux";
import rootReducer from "./rootReducer";

// tslint:disable-next-line
const storeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const configureStore = () => createStore(rootReducer, storeEnhancers);

export { configureStore };
