import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../../components/Button/Button';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import { sellBitcoin } from '../../store/bitcoin/main.actions';
import { AppState } from '../../store/store';

export const SellBitcoin: React.FC = (): JSX.Element => {
  const [error, setError] = useState('');
  const { bitcoinPrice, bitcoins } = useSelector(
    (state: AppState) => state.bitcoin
  );
  const dispatch = useDispatch();

  const handleBuy = () => {
    if (bitcoins > 0) dispatch(sellBitcoin());
    else setError("You don't have any Bitcoins to sell.");
  };

  return (
    <div className="flex flex-col text-center place-content-center font-bold text-blue-main ">
      {error ? (
        <ErrorMessage message={error} onClose={() => setError('')} />
      ) : null}
      <h1 className="text-2xl mb-8">Bitcoin price is {bitcoinPrice}$</h1>
      <h2 className="text-2xl mb-20">
        {bitcoinPrice >= 10000
          ? 'Prices are high, sell now!'
          : 'Prices are low, are you sure you want to sell?'}
      </h2>
      <Button onClick={handleBuy}>Sell 1 Bitcoin</Button>
    </div>
  );
};
