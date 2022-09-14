import React from 'react';
import { useParams } from 'react-router-dom';
import { useStateContext } from '../context/StateContext';
const ProductDetails = () => {
  const { data, setData } = useStateContext();
  const { slug } = useParams();
  const result = data?.filter((product) => product.slug.current === slug)[0];
  console.log(result.name);
  return <div>{result.name}</div>;
};

export default ProductDetails;
