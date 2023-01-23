import { useParams, useNavigate } from 'react-router-dom';
import { useStateContext } from '../../../../context/StateContext';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useQuery } from '@tanstack/react-query';
import { fetchCurrentProducts, urlFor } from '../../../../lib/client';
const ProductDetails = () => {
  const { incQty, decQty, onAdd, qty, setQty } = useStateContext();
  const { slug } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['product', slug],
    queryFn: fetchCurrentProducts,
  });
  if (isLoading) return <h1>Loading</h1>;
  if (isError) console.log(console.error);
  const product = data[0];

  return (
    <div className=" flex justify-center items-center    m-4  xl:m-24 gap-12  px-12 ">
      <div className=" justify-start items-start  ">
        <img src={urlFor(product.image && product.image[0])} className="w-20%"/>
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
          <button
            onClick={() => {
              onAdd(product, qty), setQty(1), navigate('/');
            }}
            className="border-solid rounded-md border-2 cursor-pointer p-1 text-sm bg-madart-orange border-gray-400 "
          >
            დაამატე კალათაში
          </button>
        </div>
        <div>
          <div className="flex justify-between items-center font-semibold pt-8">
            <p className="sm:text-lg lg:text-4xl sm:text-red-400  border-l-2  border-l-madart-orange p-1">
              {product.name}
            </p>
            <p className="sm:text-2xl  text-black   ">{product.price}ლ</p>
          </div>
          <div className=" mt-5">
            <span className="inline-block font-semibold mb-2  border-b-2  border-b-madart-orange lg:mt-8 ">
              შემადგენლობა :
            </span>
            <p className="text-sm sm:truncate md:whitespace-normal md:mb-6  xl:mb-14">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
