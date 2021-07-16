import {
  BitcoinActions,
  DECREASE_BITCOIN_PRICE,
  INCREASE_BITCOIN_PRICE,
  PURCHASE_BITCOIN,
  SELL_BITCOIN,
  TAKE_DEPOSIT,
  TAKE_WITHDRAWAL,
} from "./main.types";
import { History, historyService } from "./history.service";

export type BitcoinState = {
  balance: number;
  bitcoins: number;
  bitcoinPrice: number;
  history: History[];
};
const initialState: BitcoinState = {
  balance: 200,
  bitcoins: 0,
  bitcoinPrice: 1000,
  history: [],
};
export const mainReducer = (
  state: BitcoinState = initialState,
  action: BitcoinActions
): BitcoinState => {
  const spreadState = {
    ...state,
    history: [historyService(action), ...state.history],
  };
  switch (action.type) {
    case TAKE_DEPOSIT:
      return {
        ...spreadState,
        balance: state.balance + 100,
      };
    case TAKE_WITHDRAWAL:
      return {
        ...spreadState,
        balance: state.balance - 100,
      };
    case PURCHASE_BITCOIN:
      return {
        ...spreadState,
        balance: state.balance - state.bitcoinPrice,
        bitcoins: state.bitcoins + 1,
      };
    case SELL_BITCOIN:
      return {
        ...spreadState,
        balance: state.balance + state.bitcoinPrice,
        bitcoins: state.bitcoins - 1,
      };
    case INCREASE_BITCOIN_PRICE:
      return {
        ...spreadState,
        bitcoinPrice: state.bitcoinPrice + 1000,
      };
    case DECREASE_BITCOIN_PRICE:
      return {
        ...spreadState,
        bitcoinPrice: state.bitcoinPrice - 1000,
      };
    default:
      return state;
  }
};
