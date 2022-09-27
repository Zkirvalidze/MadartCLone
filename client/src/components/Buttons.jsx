import React from 'react';
import { useStateContext } from '../context/StateContext';

export const LocalAuthButton = ({ authAction, buttonName }) => {
  const { authType, setAuthType } = useStateContext();
  return (
    <button
      className="w-full h-16 bg-madart-orange rounded-md my-6 px-6"
      type="submit"
      onClick={() => {
        setAuthType(authAction);
      }}
    >
      {buttonName}
    </button>
  );
};
