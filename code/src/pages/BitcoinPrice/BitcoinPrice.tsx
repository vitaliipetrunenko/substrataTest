import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../../components/Button/Button';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import {
  increaseBitcoinPrice,
  decreaseBitcoinPrice,
} from '../../store/bitcoin/main.actions';
import { AppState } from '../../store/store';

export const BitcoinPrice: React.FC = (): JSX.Element => {
  const [error, setError] = useState('');
  const { bitcoinPrice } = useSelector((state: AppState) => state.bitcoin);
  const dispatch = useDispatch();

  const increasePrice = () => {
    dispatch(increaseBitcoinPrice());
  };
  const decreasePrice = () => {
    if (bitcoinPrice <= 1000) setError('Bitcoin price cannot be below 1000$.');
    else dispatch(decreaseBitcoinPrice());
  };

  return (
    <div className="flex text-center font-bold flex-col place-content-center text-blue-main ">
      {error ? (
        <ErrorMessage message={error} onClose={() => setError('')} />
      ) : null}
      <h1 className="text-2xl mb-20">Bitcoin price is {bitcoinPrice}$</h1>
      <div className="flex flex-row gap-5 justify-between items-center h-32">
        <Button onClick={increasePrice}>Increase Bitcoin price (+1000)</Button>
        <Button onClick={decreasePrice}>Decrease Bitcoin price (-1000)</Button>
      </div>
    </div>
  );
};
