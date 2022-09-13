import React, { useState, useEffect } from 'react';
import { client } from '../lib/client';
import { Link } from 'react-router-dom';
import { ProductDetails } from './index';
const ProductList = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    client
      .fetch(
        `*[_type=="product"]{
        name,image,slug,description,price
      }`
      )
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className=" grid grid-cols-3 place-content-center  justify-items-center mt-28 gap-4 w-full h-full">
      {data &&
        data.map((product, index) => (
          <ProductDetails key={index} product={product} />
        ))}
    </div>
  );
};

export default ProductList;
