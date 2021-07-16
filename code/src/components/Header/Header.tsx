import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';

import bitcoin from './assets/bitcoin.svg';

export const Header: React.FC = (): JSX.Element => {
  const { balance, bitcoinPrice, bitcoins } = useSelector(
    (state: AppState) => state.bitcoin
  );

  return (
    <header className="w-full h-20 max-h-7vh flex justify-between items-center uppercase text-white  bg-blue-main">
      <div className="flex items-center justify-center text-white">
        <img className="mx-8 transform scale-75 " src={bitcoin} alt="Bitcoin" />
        Bitcoin frenzy
      </div>
      <div>1 bitcoin = {bitcoinPrice} $</div>
      <div className="mr-8" >
        <div>{balance} $</div>
        <div>{bitcoins} bitcoins</div>
      </div>
    </header>
  );
};
