import { createStore, combineReducers } from "redux";
import photosReducer from "./reducers/modal";

const rootReducer = combineReducers({
  photos: photosReducer,
});

const store = createStore(rootReducer);

export default store;