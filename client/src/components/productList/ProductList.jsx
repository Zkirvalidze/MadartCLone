import React from 'react';

import { Product } from '../index';
import { fetchProducts } from '../../lib/client';
import { useQuery } from '@tanstack/react-query';

const ProductList = () => {
  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

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
