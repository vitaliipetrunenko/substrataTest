import React from 'react';

type ErrorMessageProps = {
  message: string;
  onClose: () => void;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  onClose,
}: ErrorMessageProps): JSX.Element => {
  return (
    <div className="absolute top-40 right-96 bg-white border-2 border-solid flex items-center justify-evenly text-blue-800 p-12 rounded-2xl  h-32">
      <button onClick={onClose} className="absolute left-5 top-2 transform scale-150">
        &times;
      </button>
      <div>{message}</div>
    </div>
  );
};
