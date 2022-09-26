import React, { useContext, createContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [data, setData] = useState(null);
  const [user, setUser] = useState([]);
   const [userInput, setUserInput] = useState('');
   const [passwordInput, setPasswordInput] = useState('');


  return (
    <Context.Provider value={{ data, setData, user, setUser,userInput,setUserInput,passwordInput,setPasswordInput }}>
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
