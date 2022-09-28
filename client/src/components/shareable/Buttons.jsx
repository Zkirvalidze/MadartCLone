import React from 'react';
import { useStateContext } from '../../context/StateContext';
import { authStrategy } from '../../lib/client';

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

export const SocMediaAuthButton = ({ strategy, iconSrc, style }) => {
  return (
    <button
      className={`flex justify-start items-center  border-solid border-2 p-2 my-4 rounded-md border-[#dae3f0] w-1/2 ${style}`}
      onClick={() => authStrategy(strategy)}
    >
      <img src={iconSrc} alt="google-icon" className="w-8 h-8" />
      <p className={` text-xl pl-6 `}>{strategy}</p>
    </button>
  );
};
