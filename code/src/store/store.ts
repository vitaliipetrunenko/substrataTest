import { createStore, combineReducers } from "redux";
import { mainReducer, BitcoinState } from "./bitcoin/main.reducer";

export type AppState = {
  bitcoin: BitcoinState;
};

const rootReducer = combineReducers({
  bitcoin: mainReducer,
});

export const store = createStore(rootReducer);
