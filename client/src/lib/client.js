import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import axios from 'axios';

export const client = sanityClient({
  projectId: 'x5kltkvv',
  dataset: 'production',
  useCdn: true,
});

const ApiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': true,
  },
});
export const fetchProducts = async ({ queryKey }) => {
  if (queryKey === null) return;
  const response = await client.fetch(
    `*[_type=="product"]{
          name, image[]{asset->{url}},slug,description,price,_id
        }`
  );
  return response;
};

export const fetchCurrentProducts = async ({ queryKey }) => {
  const [_, slug] = queryKey;
  const response = await client.fetch(
    ` *[_type=="product"&&slug.current=='${slug}']{
            image[]{asset->{url}},name,slug,description,price,_id
          }`
  );
  return response;
};

export const getUser = async () => {
  const { data } = await ApiClient.get(`auth/login/success`, {
    withCredentials: true,
  });
  return data;
};

export const postUser = async ({ phone, password, authType }) => {
  const { data } = await ApiClient.post(`auth/${authType}`, {
    username: phone,
    password: password,
  });

  return data;
};

export const authStrategy = (action) => {
  window.open(`${import.meta.env.VITE_API_URL + `auth/${action}`}`, '_self');
};

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
