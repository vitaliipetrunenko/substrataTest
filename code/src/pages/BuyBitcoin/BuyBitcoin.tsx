import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../../components/Button/Button';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import { purchaseBitcoin } from '../../store/bitcoin/main.actions';
import { AppState } from '../../store/store';

export const BuyBitcoin: React.FC = (): JSX.Element => {
  const [error, setError] = useState('');
  const { bitcoinPrice, balance } = useSelector(
    (state: AppState) => state.bitcoin
  );
  const dispatch = useDispatch();

  const handleBuy = () => {
    if (balance < bitcoinPrice)
      setError("You don't have enough money to buy Bitcoin.");
    else dispatch(purchaseBitcoin());
  };

  return (
    <div className="flex flex-col  text-center place-content-center font-bold text-blue-main ">
      {error ? (
        <ErrorMessage message={error} onClose={() => setError('')} />
      ) : null}
      <h1 className="text-2xl mb-8">Bitcoin price is {bitcoinPrice}$</h1>
      <h2 className="text-2xl mb-20">
        {bitcoinPrice >= 10000
          ? 'Prices are high, are you sure that you want to buy?'
          : 'Prices are low, buy more!'}
      </h2>
      <Button onClick={handleBuy}>Buy 1 Bitcoin</Button>
    </div>
  );
};
