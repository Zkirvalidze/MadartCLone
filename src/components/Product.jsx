import React from 'react';
import { Link } from 'react-router-dom';
import { urlFor } from '../lib/client';
const Product = ({ product: { name, image, price, description, slug } }) => {
  return (
    <div className="  grid  justify-items-center border-solid border-2 border-black-50 w-80 h-80 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:  duration-300 ...product card    ">
      <Link to={`/product/${slug.current}`}>
        <img
          src={urlFor(image && image[0])
            .width(250)
            .height(250)}
          className="product-image "
        />
        <div className="font-bold text-lg text-center ease-in duration-300">
          <p className="whitespace-pre-wrap">{name}</p>
          <p>{price} ლ</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
