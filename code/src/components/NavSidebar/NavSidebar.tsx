import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routes } from '../../types/app.types';
import icon from './assets/icon.svg';

export const Navbar: React.FC = (): JSX.Element => {
  const { pathname } = useLocation();

  return (
    <aside className="w-2/12 pt-12   bg-blue-main">
      {Object.values(routes).map(({ label, path }) => (
        <div key={label} className="mx-10 py-2 flex">
           <img className="mx-3" src={icon} alt="icon" />
          <Link
            className={` uppercase  ${pathname === path ? 'text-white font-bold' : 'text-gray-300'}`}
            to={path}
          >
            {label}
          </Link>
        </div>
      ))}
    </aside>
  );
};
