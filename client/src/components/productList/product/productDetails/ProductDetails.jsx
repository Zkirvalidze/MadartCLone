import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useStateContext } from '../../../../context/StateContext';
import { urlFor, client } from '../../../../lib/client';

const ProductDetails = () => {
  const { data, setData } = useStateContext();
  const { slug } = useParams();
  let result = data?.filter((product) => product.slug.current === slug)[0];

  useEffect(() => {
    !data &&
      client
        .fetch(
          ` *[_type=="product"&&slug.current=='${slug}']{
          image[]{asset->{url}},name,slug,description,price
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
            <input
              type="number"
              className="w-12 text-center border-solid border-2 border-black"
              defaultValue={1}
            ></input>
            <p className="text-2xl text-black   ">{result?.price}ლ</p>
          </div>
          <button className="  border-solid rounded-lg border-2 cursor-pointer p-2 mt-4 bg-madart-orange border-gray-400 ">
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
