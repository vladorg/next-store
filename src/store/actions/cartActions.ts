import { getProductAction } from '@/actions/products/getProductAction';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { iProduct } from '@/types';
import { lsAddProductCartService } from '@/services/localStorage/lsAddProductCartService';
import { lsRemoveProductCartService } from '@/services/localStorage/lsRemoveProductCartService';
import { lsLoadCartService } from '@/services/localStorage/lsLoadCartService';
import { useCategoryInfo } from '@/hooks/useCategoryInfo';

export const loadCart = createAsyncThunk(
  'loadCart',
  async (payload, thunkAPI) => {
    try {
      const products = await lsLoadCartService(); 

      return products
    } catch(err) {
      console.log(err);      
      return thunkAPI.rejectWithValue(err)
    }
  }
);

export const addProductToCart = createAsyncThunk<iProduct[], { id: string, quantity?: number }, {}>(
  'addProductToCart', 
  async ({ id, quantity }, thunkAPI) => {
    try {      
      let product = await getProductAction(id);

      if (!product) throw 'cannot find product!'
      
      const state = thunkAPI.getState() as RootState;
      
      let newProducts = [...state.cart.products];

      const getCategoryInfo = await useCategoryInfo([product]);
      product = getCategoryInfo[0];

      const add = lsAddProductCartService(id, quantity);      

      if (add) newProducts.push({...product, quantity: quantity || 1})       
      
      return newProducts
    } catch(err) {
      console.log(err); 
      return thunkAPI.rejectWithValue(err)
    }
})

export const deleteProductFromCart = createAsyncThunk(
  'deleteProductFromCart', 
  async (id: string, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;
      let newProducts = [...state.cart.products];
      
      const del = lsRemoveProductCartService(id);

      if (del) newProducts = state.cart.products.filter(({ _id }) => _id != id );

      return newProducts
    } catch(err) {
      console.log(err); 
      return thunkAPI.rejectWithValue(err)
    }
})
