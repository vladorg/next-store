import { createSlice } from '@reduxjs/toolkit'
import { iProduct } from '@/types';
import { addProductToCart, deleteProductFromCart, loadCart } from '../actions/cartActions';

interface iCartState {
  products: iProduct[],
  error: boolean
}

const initialState: iCartState = {
  products: [],
  error: false
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCart.rejected, (state, action) => { 
        state.error = true
      })
      .addCase(loadCart.fulfilled, (state, action) => { 
        state.error = false
        state.products = action.payload;
      })
      .addCase(addProductToCart.fulfilled, (state, action) => {
        state.products = action.payload;      
      })
      .addCase(deleteProductFromCart.fulfilled, (state, action) => {
        state.products = action.payload;    
      })
  },
});

export default cartSlice.reducer
