import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  qty: 1,
  cartItems: [],
  totalPrice: 0,
  totalQuantities: 0,
};

let foundProduct;
let index;
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incQty: (state) => {
      state.qty += 1;
    },
    decQty: (state) => {
      if (state.qty - 1 < 1) {
        state.qty = 1;
      } else {
        state.qty -= 1;
      }
    },
    resetQty: (state) => {
      state.qty = 1;
    },
    onAdd: (state, result) => {
      const product = result.payload;
      console.log(product)
      const checkProductInCart = state.cartItems.find(
        (item) => item['_id'] === product._id
      );
      state.totalPrice += product.price * state.qty;
      state.totalQuantities += state.qty;

      if (checkProductInCart) {
        const updatedCartItems = state.cartItems.map((item) => {
          if (item._id === product._id)
            return {
              ...item,
              quantity: item.quantity + state.qty,
            };
          {
            return item;
          }
        });

        state.cartItems = updatedCartItems;
      } else {
        product.quantity = state.qty;
        state.cartItems = [...state.cartItems, { ...product }];
      }
    },
    onRemove: (state, result) => {
      const product = result.payload;
      foundProduct = state.cartItems.find(
        (item) => item.slug.current === product.slug.current
      );
      const newCartItems = state.cartItems.filter(
        (item) => item.slug.current !== product.slug.current
      );

      state.totalPrice -= foundProduct.price * foundProduct.quantity;
      state.totalQuantities -= foundProduct.quantity;
      state.cartItems = newCartItems;
    },
    toggleCartItemQuanitity: (state,payload) => {
        const id = payload.payload[0];
        const value = payload.payload[1];
        console.log(id,value)
      foundProduct = state.cartItems.find((item) => item._id === id);
      index = state.cartItems.findIndex((product) => product._id === id);
      const newCartItems = state.cartItems.filter((item) => item._id !== id);

      if (value === 'inc') {
        state.cartItems = [
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity + 1 },
        ];
        state.totalPrice += foundProduct.price;
        state.totalQuantities += 1;
      } else if (value === 'dec') {
        if (foundProduct.quantity > 1) {
          state.cartItems = [
            ...newCartItems,
            { ...foundProduct, quantity: foundProduct.quantity - 1 },
          ];
          state.totalPrice -= foundProduct.price;
          state.totalQuantities -= 1;
        }
      }
    },
  },
});

export const { incQty, decQty, resetQty, onAdd, onRemove ,toggleCartItemQuanitity} = cartSlice.actions;
export default cartSlice.reducer;
