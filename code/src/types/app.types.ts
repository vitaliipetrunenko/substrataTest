import { BitcoinPrice } from "./../pages/BitcoinPrice/BitcoinPrice";
import { BuyBitcoin } from "./../pages/BuyBitcoin/BuyBitcoin";
import { SellBitcoin } from "./../pages/SellBitcoin/SellBitcoin";
import { Wallet } from "./../pages/Wallet/Wallet";

export type AppRoutes = {
  [key: string]: {
    path: string;
    component: React.FC;
    label: string;
  };
};
export const routes: AppRoutes = {
  my_wallet: {
    path: "/wallet",
    component: Wallet,
    label: "My wallet",
  },
  buy_bitcoin: {
    path: "/buy",
    component: BuyBitcoin,
    label: "Buy bitcoin",
  },
  sell_bitcoin: {
    path: "/sell",
    component: SellBitcoin,
    label: "Sell bitcoin",
  },
  bitcoin_price: {
    path: "/bitcoin",
    component: BitcoinPrice,
    label: "Bitcoin price",
  },
};
