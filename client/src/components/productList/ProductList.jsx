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
          name, image[]{asset->{url}},slug,description,price,_id
        }`
      )
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="  grid sm:grid-cols-2 md:grid-cols-3   mt-14 ">
        {data?.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
