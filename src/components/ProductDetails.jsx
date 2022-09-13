import React from 'react';
import { Link } from 'react-router-dom';
import { urlFor } from '../lib/client';
const ProductDetails = ({
  product: { name, image, price, description, slug },
}) => {
  return (
    <div className="">
      <Link to={`/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])
              .width(250)
              .height(250)}
            className="product-image"
          />
        </div>
      </Link>
    </div>
  );
};

export default ProductDetails;
