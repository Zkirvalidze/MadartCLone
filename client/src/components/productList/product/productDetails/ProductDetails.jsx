import React from 'react';
import { useEffect } from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import { incQty,decQty,onAdd, resetQty } from '../../../../features/cart/cartSlice';
import { useStateContext } from '../../../../context/StateContext';
import { urlFor, client } from '../../../../lib/client';
import {
  AiOutlineMinus,
  AiOutlinePlus,
} from 'react-icons/ai';

const ProductDetails = () => {
  const qty = useSelector((state) => state.cart.qty);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, setData } = useStateContext();
  const { slug } = useParams();
  const products = useSelector((state) => state.products.products);
  let result = products?.filter((product) => product.slug.current === slug)[0];

  useEffect(() => {
    !data &&
      client
        .fetch(
          ` *[_type=="product"&&slug.current=='${slug}']{
          image[]{asset->{url}},name,slug,description,price,_id
        }`
        )
        .then((resp) => {
          setData(resp);
          result = data;
        })
        .catch((err) => console.log(err));
  }, []);

  return (
    data && (
      <div className=" flex justify-center m-44 gap-12  px-12 w-3/4">
        <div className=" justify-start items-start  ">
          <p className="text-4xl text-red-400 pt-16 maxw-">{result?.name}</p>
          <p className="tetx-lg mt-5">{result?.description}</p>
          <div className="flex justify-start items-center gap-5 mt-10">
            <p className="text-2xl text-black   ">{result?.price}ლ</p>
          </div>
          <div className=" flex gap-5 mt-3 items-center quantity">
            <h3>Quantity:</h3>
            <p className=" flex border-2 border-gray-300 justify-center items-center  quantity-desc">
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
