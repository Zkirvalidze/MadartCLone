import React from 'react';
import { Hero, ProductList } from '../components/index';
import { useStateContext } from '../context/StateContext';
import { useEffect } from 'react';
import { getUser } from '../lib/client';

const Home = () => {
  const { user, setUser } = useStateContext();
  console.log(user  )

  useEffect(() => {
    getUser().then((res) => {
       if (res.status === 200) setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    getUser();
  }, []);

  return <ProductList />;
};

export default Home;
