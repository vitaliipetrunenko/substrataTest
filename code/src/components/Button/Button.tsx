import React from 'react';

type ButtonProps = {
  children: string;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <button onClick={onClick} className="border-0 max-w-xs self-center font-bold bg-blue-main text-white block rounded-2xl cursor-pointer px-8 py-3">
      {children}
    </button>
  );
};
