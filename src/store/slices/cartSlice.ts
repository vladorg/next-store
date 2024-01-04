import { createSlice } from '@reduxjs/toolkit'
import { iProduct } from '@/types';
import { addProductToCart, deleteProductFromCart, loadCart } from '../actions/cartActions';

interface iCartState {
  products: iProduct[],
  error: boolean,
  loading: boolean
}

const initialState: iCartState = {
  products: [],
  error: false,
  loading: false
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCart.pending, (state, action) => { 
        state.loading = true
        state.error = false
      })
      .addCase(loadCart.rejected, (state, action) => { 
        state.error = true
        state.loading = false
      })
      .addCase(loadCart.fulfilled, (state, action) => { 
        state.error = false
        state.loading = false
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
