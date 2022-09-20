import React, { useEffect } from 'react';
import { client } from '../../lib/client';
import { Product } from '../index';
import { useStateContext } from '../../context/StateContext';
const ProductList = () => {
  const { data, setData } = useStateContext();

  useEffect(() => {
    client
      .fetch(
        `*[_type=="product"]{
          name, image[]{asset->{url}},slug,description,price
        }`
      )
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className=" grid-cols-1 grid md:grid-cols-4  place-content-center  justify-items-center mt-28 gap-4 w-full h-full">
        <div className=" ">filter spaceholder </div>
        {data?.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
