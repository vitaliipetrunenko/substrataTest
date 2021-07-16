export const TAKE_DEPOSIT = "TAKE_DEPOSIT";
export const TAKE_WITHDRAWAL = "TAKE_WITHDRAWAL";

export const PURCHASE_BITCOIN = "PURCHASE_BITCOIN";
export const SELL_BITCOIN = "SELL_BITCOIN";

export const INCREASE_BITCOIN_PRICE = "INCREASE_BITCOIN_PRICE";
export const DECREASE_BITCOIN_PRICE = "DECREASE_BITCOIN_PRICE";

export type TakeDeposit = {
  type: typeof TAKE_DEPOSIT;
};
export type TakeWithdrawal = {
  type: typeof TAKE_WITHDRAWAL;
};
export type PurchaseBitcoin = {
  type: typeof PURCHASE_BITCOIN;
};
export type SellBitcoin = {
  type: typeof SELL_BITCOIN;
};
export type IncreaseBitcoinPrice = {
  type: typeof INCREASE_BITCOIN_PRICE;
};
export type DecreaseBitcoinPrice = {
  type: typeof DECREASE_BITCOIN_PRICE;
};
export type BitcoinActions =
  | TakeDeposit
  | TakeWithdrawal
  | PurchaseBitcoin
  | SellBitcoin
  | IncreaseBitcoinPrice
  | DecreaseBitcoinPrice;
