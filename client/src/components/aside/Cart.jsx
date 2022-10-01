import React from 'react';
import { cartBg, checkoutIcon } from '../../assets';
import { Link } from 'react-router-dom';
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from 'react-icons/ai';

import { urlFor } from '../../lib/client';
import { TiDeleteOutline } from 'react-icons/ti';
import { useStateContext } from '../../context/StateContext';

const Cart = () => {
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext();

  return (
    <div
      className={`max-w-[350px]   bg-[url(../../src/assets/cart_bg.png)] bg-madart-orange bg-repeat-y   p-6 rounded-md w-full h-full `}
    >
      <div className=" flex my-6 items-center">
        <img src={checkoutIcon} alt="cart icon" />
        <p className="text-lg font-semibold  ml-5">კალათა</p>
      </div>

      <div className="flex flex-col">
        {cartItems.length >= 1 &&
          cartItems.map((item, index) => (
            <div
              className="   mb-4  rounded-lg w-full h-auto bg-white product"
              key={index}
            >
              <div className="flex">
                <div className="   max-w-[33%]">
                  <img src={urlFor(item?.image[0])} className=" p-1 " />
                </div>
                <div className="mt-4  item-desc">
                  <p>{item?.name}</p>
                  <p className="font-semibold ">{item?.price}ლ</p>
                </div>
              </div>
              <div className="flex justify-between  items-center ">
                <p className=" flex  quantity-desc pl-3   ">
                  <span
                    className="text-red-400 p-1 minus"
                    onClick={() => toggleCartItemQuanitity(item?._id, 'dec')}
                  >
                    <AiOutlineMinus />
                  </span>
                  <span className="num px-1 ">{item?.quantity}</span>
                  <span
                    className=" text-green-400 p-1 plus"
                    onClick={() => toggleCartItemQuanitity(item?._id, 'inc')}
                  >
                    <AiOutlinePlus />
                  </span>
                </p>
                <TiDeleteOutline
                  className="text-red-500 mr-2 w-5 h-5"
                  onClick={() => onRemove(item)}
                />
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-between bg-white items-center  rounded-md   ">
        <span className="bg-[url(../../src/assets/seperator.png)]  rounded-l-md bg-right bg-no-repeat w-[63%] p-2 overflow-hidden bg-[#ffefc2] float-left">
          ჯამი: {totalPrice}ლ
        </span>
        <span  className='p-2'> შეუკვეთე</span >
      </div>
    </div>
  );
};

export default Cart;
