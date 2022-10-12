import React from 'react';
import { Hero, ProductList, Cart ,Filter, } from '../components/index';
import { useStateContext } from '../context/StateContext';
import { useEffect } from 'react';
import { getUser } from '../lib/client';

const Home = () => {
  const { user, setUser,cartItems , } = useStateContext();

  useEffect(() => {
    getUser()
      .then((res) => {
        if (res.status === 200) setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {/* <Filter/> */}
      {<Cart />}
      <ProductList />
    </div>
  );
};

export default Home;
