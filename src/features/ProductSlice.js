import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import productsData from '../products';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    return productsData;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const selectAllProducts = state => state.products.products;

export default productsSlice.reducer;
