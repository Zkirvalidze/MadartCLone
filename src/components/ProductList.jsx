import React, { useState, useEffect } from 'react';
import { client } from '../lib/client';

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
  console.log(data);
  return <div>ProductList</div>;
};

export default ProductList;
