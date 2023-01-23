import React from 'react';
import { Hero, ProductList, Cart, Filter } from '../components/index';
const Home = () => {
  return (
    <div>
      {/* <Filter/> */}
      {<Cart />}
      <ProductList />
    </div>
  );
};

export default Home;
