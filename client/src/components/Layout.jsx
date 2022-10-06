import React from 'react';
import Navbar from './Navbar';
import {MenuModal} from '../components/index'
import { useStateContext } from '../context/StateContext';
const Layout = ({ children }) => {
  const { menuToggle } = useStateContext();

  return (
    <>
      <Navbar />
      {menuToggle && <MenuModal />}
      {children}
    </>
  );
};

export default Layout;
