import {
  PurchaseBitcoin,
  TakeDeposit,
  TakeWithdrawal,
  TAKE_DEPOSIT,
  TAKE_WITHDRAWAL,
  PURCHASE_BITCOIN,
  SellBitcoin,
  SELL_BITCOIN,
  IncreaseBitcoinPrice,
  INCREASE_BITCOIN_PRICE,
  DecreaseBitcoinPrice,
  DECREASE_BITCOIN_PRICE,
} from "./main.types";

export const takeDeposit = (): TakeDeposit => ({
  type: TAKE_DEPOSIT,
});
export const takeWithdrawal = (): TakeWithdrawal => ({
  type: TAKE_WITHDRAWAL,
});
export const purchaseBitcoin = (): PurchaseBitcoin => ({
  type: PURCHASE_BITCOIN,
});
export const sellBitcoin = (): SellBitcoin => ({
  type: SELL_BITCOIN,
});
export const increaseBitcoinPrice = (): IncreaseBitcoinPrice => ({
  type: INCREASE_BITCOIN_PRICE,
});
export const decreaseBitcoinPrice = (): DecreaseBitcoinPrice => ({
  type: DECREASE_BITCOIN_PRICE,
});
