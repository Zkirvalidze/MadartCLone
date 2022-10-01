import React from 'react';
import { useEffect } from 'react';
import { useParams ,useNavigate} from 'react-router-dom';

import { useStateContext } from '../../../../context/StateContext';
import { urlFor, client } from '../../../../lib/client';
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from 'react-icons/ai';

const ProductDetails = () => {
  const navigate = useNavigate()
  const { data, setData, incQty, decQty, qty, onAdd,setQty } = useStateContext();
  const { slug } = useParams();
  let result = data?.filter((product) => product.slug.current === slug)[0];

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
                onClick={decQty}
              >
                <AiOutlineMinus />
              </span>
              <span className="num px-4 ">{qty}</span>
              <span
                className=" text-green-400 p-2 border-gray-300 border-l-2  plus"
                onClick={incQty}
              >
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <button
            onClick={() => {
              onAdd(result, qty);
                setQty(1)
              navigate('/');
            }}
            className="  border-solid rounded-lg border-2 cursor-pointer p-2 mt-4 bg-madart-orange border-gray-400 "
          >
            კალათაში დამატება
          </button>
        </div>
        <img
          src={urlFor(result?.image && result.image[0])
            .width(500)
            .height(500)}
          alt="product-image"
        />
      </div>
    )
  );
};

export default ProductDetails;
