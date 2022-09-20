import React from 'react';
import { Link } from 'react-router-dom';

import { logo, loginIcon, checkoutIcon } from '../assets';
const Navbar = () => {
  return (
    <div className=" flex   justify-between items-center  pl-24 sticky top-0 z-50  bg-yellow-50  Navbar ">
      <div className="flex shrink-0">
        <Link to="/">
          <img src={logo} alt="logo" width="181px" heigth="63px" />
        </Link>
      </div>
      <div className=" mx-2 h-0.5 bg-madart-orange w-1/2 "></div>
      <div className="flex items-center font-bold">
        <div
          className="flex justify-between pr-8 shrink-0 "
          style={{ width: '350px' }}
        >
          <Link to="/">მთავარი</Link>
          <Link to="/aboutus">ჩვენ შესახებ</Link>
          <Link to="/login">
            <img src={loginIcon} alt="login icon" className="inline mr-2" />
            <span>შესვლა</span>
          </Link>
        </div>
        <div className="bg-madart-orange py-7 pr-24  shrink-0 ">
          <Link to="/checkout" className="hover:text-black">
            <img
              src={checkoutIcon}
              alt="checkoutIcon"
              className="inline  ml-10 px-2 "
            />
            <p className="inline  "> კალათა</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
