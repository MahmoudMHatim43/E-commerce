import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("https://api.escuelajs.co/api/v1/products");
      return res.data && res.data.length
        ? res.data
        : rejectWithValue("No Products Found");
    } catch (error) {
      return rejectWithValue(error.message || "Failed To Fetch Products");
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    categories: [],
    selectedCategory: "Clothes",
    isPending: false,
    error: null,
  },
  reducers: {
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isPending = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isPending = false;
        state.products = action.payload;
        const categories = new Set(
          action.payload.map((product) => product.category.name)
        );
        state.categories = [...categories];
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isPending = false;
        state.error = action.payload;
      });
  },
});
export { fetchProducts };
export const { setSelectedCategory } = productsSlice.actions;
export default productsSlice.reducer;
