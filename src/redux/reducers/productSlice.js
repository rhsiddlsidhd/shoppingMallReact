import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
  productList: [],
  selectItem: null,
  isLoading: false,
  err: null,
};

/**
 * Thunk 미들웨어
 */
export const fetchAllProduct = createAsyncThunk(
  "product/fetchAll",
  async (searchTerm, thunkAPI) => {
    try {
      const url = new URL(
        `https://my-json-server.typicode.com/rhsiddlsidhd/shoppingMallReact/products?q=${
          searchTerm ? searchTerm : ""
        }`
      );
      const res = await fetch(url);

      return await res.json();
    } catch (err) {
      thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchSingleProduct = createAsyncThunk(
  "product/fetchSingle",
  async (params, thunkAPI) => {
    try {
      const url = new URL(
        `https://my-json-server.typicode.com/rhsiddlsidhd/shoppingMallReact/products/${params.id}`
      );
      const res = await fetch(url);

      return await res.json();
    } catch (err) {
      thunkAPI.rejectWithValue(err.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAllProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload;
      })
      .addCase(fetchAllProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.err = action.payload;
      })
      .addCase(fetchSingleProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectItem = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.err = action.payload;
      });
  },
});
export const productActions = productSlice.actions;
export default productSlice.reducer;
