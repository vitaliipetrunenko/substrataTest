import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../../components/Button/Button';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import {
  takeDeposit,
  takeWithdrawal,
} from '../../store/bitcoin/main.actions';
import { AppState } from '../../store/store';

export const Wallet: React.FC = (): JSX.Element => {
  const [error, setError] = useState('');
  const { bitcoins, balance } = useSelector((state: AppState) => state.bitcoin);
  const dispatch = useDispatch();

  const handleDeposit = () => {
    dispatch(takeDeposit());
  };

  const handleWithdraw = () => {
    if (balance < 100) setError('Your balance is empty.');
    else dispatch(takeWithdrawal());
  };

  return (
    <main className="flex flex-col text-center place-content-center font-bold text-blue-main ">
      {error ? (
        <ErrorMessage onClose={() => setError('')} message={error} />
      ) : null}
      <h1 className="text-2xl mb-8">Your Bitcoin wallet</h1>
      <h2 className="text-2xl mb-20">You own {bitcoins} Bitcoins</h2>
      <div className="flex flex-col justify-between h-32">
        <Button onClick={handleDeposit}>Deposit 100$</Button>
        <Button onClick={handleWithdraw}>Withdraw 100$</Button>
      </div>
    </main>
  );
};
