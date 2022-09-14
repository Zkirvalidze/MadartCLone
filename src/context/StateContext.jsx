import React, { useContext, createContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [data, setData] = useState(null);

  return (
    <Context.Provider value={{ data, setData }}>{children}</Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
