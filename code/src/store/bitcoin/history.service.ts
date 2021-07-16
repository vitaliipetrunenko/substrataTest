import {
  BitcoinActions,
  DECREASE_BITCOIN_PRICE,
  INCREASE_BITCOIN_PRICE,
  PURCHASE_BITCOIN,
  SELL_BITCOIN,
  TAKE_DEPOSIT,
  TAKE_WITHDRAWAL,
} from "./main.types";

export type History = {
  message: string;
  time: string;
};

export const historyService = (action: BitcoinActions): History => {
  const time = new Date().toLocaleDateString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });
  switch (action.type) {
    case TAKE_DEPOSIT:
      return {
        message: "Took a 100$ deposit",
        time,
      };
    case TAKE_WITHDRAWAL:
      return {
        message: "Took a 100$ withdrawal",
        time,
      };
    case PURCHASE_BITCOIN:
      return {
        message: "Purchased 1 Bitcoin",
        time,
      };
    case SELL_BITCOIN:
      return {
        message: "Sold 1 Bitcoin",
        time,
      };
    case INCREASE_BITCOIN_PRICE:
      return {
        message: "Increased Bitcoin price by 1000$",
        time,
      };
    case DECREASE_BITCOIN_PRICE:
      return {
        message: "Descreaded bitcoin price by 1000$",
        time,
      };
    default:
      return {
        message: "Unknown operation",
        time,
      };
  }
};
