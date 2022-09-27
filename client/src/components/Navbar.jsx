import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/StateContext';
import { logo, loginIcon, checkoutIcon } from '../assets';
import { authStrategy } from '../lib/client';
const Navbar = () => {
  const { data, user } = useStateContext();

  return (
    <div className=" flex    justify-between items-center  pl-24 sticky top-0 z-50  bg-yellow-50  Navbar ">
      <div className="flex shrink-0 navbar-logo...">
        <Link to="/">
          <img src={logo} alt="logo" width="181px" heigth="63px" />
        </Link>
      </div>
      <div className=" mx-2 h-0.5 bg-madart-orange w-1/2 navbar-line... "></div>
      <div className="flex  items-center font-bold navbar-links...">
        <div
          className="flex relative justify-between items-center pr-8 shrink-0  "
          style={{ width: '400px' }}
        >
          <Link to="/">მთავარი</Link>
          <Link to="/aboutus">ჩვენ შესახებ</Link>
          <Link
            to={!user ? '/login' : '#'}
            className=" navbar-login"
          >
            <img src={loginIcon} alt="login icon" className={`inline mr-2 `} />
            {!user ? (
              <span>შესვლა</span>
            ) : (
              <span>
                გამარჯობა,
                <br />{' '}
                <span className="pl-6 pb-10">
                  {user.username.split(' ')[0]}
                </span>
              </span>
            )}
          </Link>

          {user && (
            <div
              className={`  hidden hover:block p-6  absolute  top-[14px] right-[-16px] mx-4 my-2 min-w-[140px] rounded-md  bg-yellow-50 navbar-sidebar`}
            >
              <ul className="list-none flex  flex-col  justify-end items-center flex-1 ">
                <li className="inline-block">
                  <Link to="#" className=" ">
                    <p className="pb-1  border-b border-black ">Your orders</p>
                  </Link>
                </li>
                <li>
                  <button onClick={()=>{authStrategy('logOut')}} className="m-1">
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          )}
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
