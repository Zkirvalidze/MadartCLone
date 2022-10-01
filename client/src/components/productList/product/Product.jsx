import React from 'react';
import { Link } from 'react-router-dom';
import { urlFor } from '../../../lib/client';
const Product = ({ product: { name, image, price, description, slug } }) => {
  return (
    <div className="  flex justify-center items-center flex-col flex-wrap  border-solid border-2 border-gray-300 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:  duration-300 ...product card    ">
      <Link to={`/product/${slug.current}`}>
        <img
          src={urlFor(image && image[0])}
          alt="product-image"
          className="w-full h-auto"
        />
        <div className="font-bold text-lg text-center ease-in duration-300">
          <p className="whitespace-pre-wrap">{name}</p>
          <p>{price} ლ</p>
        </div>
      </Link>
      <button className="border-2 border-black border-solid bg-madart-orange rounded-md p-2">
        იყიდე
      </button>
    </div>
  );
};

export default Product;
