import React from 'react';
import logo from '../assets/madart_logotype.png';
import loginIcon from '../assets/login_icon.png';
import checkoutIcon from '../assets/cart_icon.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className=" flex   justify-between items-center  pl-24  ">
      <div className="flex shrink-0">
        <Link to="/">
          <img src={logo} alt="logo" width="181px" heigth="63px" />
        </Link>
      </div>
      <div className=" mx-2 h-0.5 bg-madart-orange w-1/2 "></div>
      <div className="flex items-center font-bold ">
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
          <Link to="/checkout">
            <img
              src={checkoutIcon}
              alt="checkoutIcon"
              className="inline  ml-10 px-2 "
            />
            კალათა
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
