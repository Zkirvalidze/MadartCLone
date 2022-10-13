import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import { client } from '../../lib/client';
import { useDispatch } from 'react-redux';
const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  
  async () => {
      
    const response = await client.fetch(
      `*[_type=="product"]{
          name, image[]{asset->{url}},slug,description,price,_id
        }`
    );
    return response;
  }
);

export const fetchCurrentProducts = createAsyncThunk(
  'products/fetchCurrentProducts',

  async (slug) => {
  

    const response = await client.fetch(
      ` *[_type=="product"&&slug.current=='${slug}']{
            image[]{asset->{url}},name,slug,description,price,_id
          }`
    );
    return response;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    },
    [fetchCurrentProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    },
    [fetchProducts.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
