import React, { useContext, createContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);
  const [authType, setAuthType] = useState('');

  return (
    <Context.Provider
      value={{
        data,
        setData,
        user,
        setUser,
        authType,setAuthType
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
