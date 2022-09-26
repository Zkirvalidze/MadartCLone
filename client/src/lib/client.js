import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import Axios from 'axios';

export const client = sanityClient({
  projectId: 'x5kltkvv',
  dataset: 'production',
  useCdn: true,
});


export const getUser = () => {
  return Axios.get(`${import.meta.env.VITE_API_URL + `auth/login/success`}`, {
    withCredentials: true,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
  });
};

export const postUser = (user, password, authAction) => {
  return Axios({
    method: 'POST',
    data: {
      username: user,
      password: password,
    },
    withCredentials: true,
    url: `${import.meta.env.VITE_API_URL + `auth/${authAction}`}`,
  });
};

export const authStrategy = (action) => {
  window.open(`${import.meta.env.VITE_API_URL + `auth/${action}`}`, '_self');
};

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
