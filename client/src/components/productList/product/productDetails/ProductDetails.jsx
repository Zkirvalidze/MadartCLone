import React from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  incQty,
  decQty,
  onAdd,
  resetQty,
} from '../../../../features/cart/cartSlice';
import { useStateContext } from '../../../../context/StateContext';
import { urlFor, client } from '../../../../lib/client';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { fetchCurrentProducts } from '../../productSlice';

const ProductDetails = () => {
  const qty = useSelector((state) => state.cart.qty);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, setData } = useStateContext();
  const { slug } = useParams();
  const products = useSelector((state) => state.products.products);
  let result = products?.filter((product) => product.slug.current === slug)[0];

  useEffect(() => {
    products.length === 0 && dispatch(fetchCurrentProducts(slug));
  }, [dispatch]);
  
  return (
    products.length > 0 && (
      <div className=" flex  flex-col   sm:flex-row justify-center items-start sm:m-20 sm:mx-4   bg-[#fef4eb]">
        <div className="sm:w-1/2   sm:h-1/4  details-image">
          <img
            src={urlFor(result?.image && result.image[0])}
            className="w-screen h-full   "
            alt="product-image"
          />
        </div>
        <div className=" sm:flex sm:flex-col-reverse     p-4  sm:w-1/2  md:h-1/4   ">
          <div className=" flex justify-between   mt-2   quantity">
            <p className=" flex border-2 border-gray-300  rounded-md  items-center  quantity-desc">
              <span
                className="text-red-400 p-2 border-r-gray-300  border-r-2 outline-none  minus"
                onClick={() => dispatch(decQty())}
              >
                <AiOutlineMinus />
              </span>
              <span className="num px-4 ">{qty}</span>
              <span
                className=" text-green-400 p-2 border-gray-300 border-l-2  plus"
                onClick={() => dispatch(incQty())}
              >
                <AiOutlinePlus />
              </span>
            </p>
            <button
              onClick={() => {
                dispatch(onAdd(result));
                dispatch(resetQty());

                navigate('/');
              }}
              className="border-solid rounded-md border-2 cursor-pointer p-1 text-sm bg-madart-orange border-gray-400 "
            >
              დაამატე კალათაში
            </button>
          </div>
          <div>
            <div className="flex justify-between items-center font-semibold pt-8">
              <p className="sm:text-lg lg:text-4xl sm:text-red-400  border-l-2  border-l-madart-orange p-1">
                {result?.name}
              </p>
              <p className="sm:text-2xl  text-black   ">{result?.price}ლ</p>
            </div>
            <div className=" mt-5">
              <span className="inline-block font-semibold mb-2  border-b-2  border-b-madart-orange lg:mt-8 ">
                შემადგენლობა :
              </span>
              <p className="text-sm sm:truncate md:whitespace-normal md:mb-6  xl:mb-14">
                {result?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductDetails;
