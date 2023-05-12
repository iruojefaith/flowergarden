import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import products from '../products';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    return products;

  }
);
const initialState = {
 products: products,
    amount: 0,
    total: 0,
    status: null,
}

const ProductReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
        state.status = 'pending';
      },
      [fetchProducts.fulfilled]: (state, action) => {
        state.status = 'success';
        state.products = action.payload
      },
      [fetchProducts.rejected]: (state, action) => {
      state.status = "rejected";
      },
  },
});

export const selectAllProducts = state => state.products.products;

export default ProductReducer.reducer;
