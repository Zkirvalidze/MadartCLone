import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'x5kltkvv',
  dataset: 'production',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
