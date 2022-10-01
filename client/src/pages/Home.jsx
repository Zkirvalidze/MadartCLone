import React from 'react';
import { Hero, ProductList, Cart } from '../components/index';
import { useStateContext } from '../context/StateContext';
import { useEffect } from 'react';
import { getUser } from '../lib/client';

const Home = () => {
  const { user, setUser,cartItems } = useStateContext();

  // useEffect(() => {
  //   getUser()
  //     .then((res) => {
  //       if (res.status === 200) setUser(res.data);
  //     })
  //     .catch((err) => {
  //       // console.log(err);
  //     });
  // }, []);

  return (
    <div className="flex mt-14 mx-24 gap-5">
      {cartItems.length !==0 && <Cart />}
      <ProductList />
    </div>
  );
};

export default Home;
