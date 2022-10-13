import React, { useEffect } from 'react';

import { Product } from '../index';
import { useStateContext } from '../../context/StateContext';
import { fetchProducts } from './productSlice';
import { useDispatch, useSelector } from 'react-redux';
const ProductList = () => {
  const dispatch = useDispatch();
  const { data, setData } = useStateContext();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className="  grid sm:grid-cols-2 md:grid-cols-3   mt-14 ">
        {products?.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
