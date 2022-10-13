import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { urlFor } from '../../../lib/client';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { onAdd } from '../../../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
const Product = ({
  product: { name, image, price, description, slug, _id },
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div
      className="  flex justify-start items-start sm:flex-col sm:border sm:items-center   border-b  bg-white relative  ...product card"
      onClick={() => navigate(`/product/${slug.current}`)}
    >
      <img
        src={urlFor(image && image[0])}
        alt="product-image"
        className="w-[30vw] sm:w-[70%] p-2 inline-block"
      />

      <div className=" text-sm   text-start sm:text-center pt-4       ">
        <span className="font-semibold">{name}</span>
        <br />
        <span>{price} ლ</span>
        <br />
        <span className="sm:hidden inline-block  h-10 w-[70%] overflow-hidden text-clip mt-2 ">
          {description}
        </span>
      </div>

      <AiOutlineShoppingCart
        className=" sm:hidden p-2 w-10 h-10 bg-madart-orange rounded-md absolute top-[50px] right-[15px]"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(onAdd({ name, image, price, description, slug, _id }));
        }}
      />

      <button className="hidden sm:block border-2 border-black border-solid bg-madart-orange rounded-md p-2">
        იყიდე
      </button>
    </div>
  );
};

export default Product;
