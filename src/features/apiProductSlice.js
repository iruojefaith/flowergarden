import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const productsApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com"}),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
  }),
});


export const { useGetAllProductsQuery } = productsApi;



// const productsSlice = createSlice({
//   name: 'products',
//   initialState: {
//     products: [],
//     amount: 0,
//     status: 'idle',
//     error: null
//   },
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.products = action.payload;
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   }
// });

// export default productsSlice.reducer;
