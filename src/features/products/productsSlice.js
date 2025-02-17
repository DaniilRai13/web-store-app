import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constans";
import axios from 'axios'

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const res = await axios(`${BASE_URL}/products`);
    return res.data;
  }
)

const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    filtered: [],
    related: [],
    isLoading: false
  },
  reducers: {
    filteredByPrice: (state, { payload }) => {
      state.filtered = state.list.filter(({ price }) => price < payload)
    },
    relatedByCategories: (state, { payload }) => {
      state.related = state.list.filter(({ category: { id } }) => id === payload)
      console.log(state.related)
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getProducts.pending, (state) => {
      // Add user to the state array
      state.isLoading = true
    })
    builder.addCase(getProducts.fulfilled, (state, action) => {
      // Add user to the state array
      state.list = action.payload
      state.isLoading = false

    })
    builder.addCase(getProducts.rejected, (state) => {
      // Add user to the state array
      state.isLoading = false;
      console.log("Error")
    })
  },
})

export const { filteredByPrice, relatedByCategories } = productsSlice.actions
export default productsSlice.reducer