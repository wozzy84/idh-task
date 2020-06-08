import { createStore, combineReducers, applyMiddleware } from "redux";
// import logger from "redux-logger";
import { setSlide, isModalOpen } from "./reducers";

const reducers = combineReducers({
  setSlide: setSlide,
  isModalOpen: isModalOpen,
});

//store
const store = createStore(reducers, applyMiddleware());

export { store };
