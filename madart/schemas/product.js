export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },

    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 20,
      },
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
  ],
};
