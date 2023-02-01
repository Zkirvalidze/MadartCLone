import { cartBg, checkoutIcon } from '../../assets';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';

import { urlFor } from '../../lib/client';
import { useStateContext } from '../../context/StateContext';
const Cart = () => {
  const { totalPrice, cartItems, toggleCartItemQuanitity, onRemove } =
    useStateContext();
  const DEC = 'dec';
  const INC = 'inc';
  return (
    <div
      className={`w-full sm:max-w-md   bg-[url(../../src/assets/cart_bg.png)] bg-madart-orange bg-repeat-y   p-6 rounded-md  h-full `}
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
                    onClick={() => toggleCartItemQuanitity(item?._id, DEC)}
                  >
                    <AiOutlineMinus />
                  </span>
                  <span className="num px-1 ">{item?.quantity}</span>
                  <span
                    className=" text-green-400 p-1 plus"
                    onClick={() => toggleCartItemQuanitity(item?._id, INC)}
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
        <span className="p-2"> შეუკვეთე</span>
      </div>
    </div>
  );
};

export default Cart;
