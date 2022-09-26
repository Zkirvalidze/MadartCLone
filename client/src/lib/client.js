import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import Axios from 'axios';
export const client = sanityClient({
  projectId: 'x5kltkvv',
  dataset: 'production',
  useCdn: true,
});

export const registerUser = (user,password) => {
  return  Axios({
      method: 'POST',
      data: {
        username: user,
        password: password,
      },
      withCredentials: true,
      url: 'http://localhost:5000/auth/register',
    })
  }

   export const loginUser = (user,password) => {
    return  Axios({
        method: 'POST',
        data: {
          username: user,
          password: password,
        },
        withCredentials: true,
        url: 'http://localhost:5000/auth/login',
      })
    };
  
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
