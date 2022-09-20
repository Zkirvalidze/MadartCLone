import React from 'react';
import { Hero, ProductList } from '../components/index';
import { useStateContext } from '../context/StateContext';
import { useEffect } from 'react';
const Home = () => {
  const { user, setUser } = useStateContext();

  console.log(user);
  useEffect(() => {
    const getUser = () => {
      fetch('http://localhost:5000/auth/login/success', {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error('authentication has been failed!');
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return <ProductList />;
};

export default Home;
