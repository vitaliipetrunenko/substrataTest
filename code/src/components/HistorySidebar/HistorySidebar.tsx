import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';

export const HistorySidebar: React.FC = (): JSX.Element => {
  const { history } = useSelector((state: AppState) => state.bitcoin);

  return (
    <aside className="w-2/12 h-full max-h-full overflow-y-scroll bg-gray-200">
      {history.map((item, index) => (
        <div className="h-20 border-b-2 border-solid border-blue-main text-blue-main" key={item.message + index}>
          <div className="ml-2">{item.time}</div>
          <div className="text-center font-bold">{item.message}</div>
        </div>
      ))}
    </aside>
  );
};
