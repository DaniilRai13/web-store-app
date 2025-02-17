import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constans";
import axios from 'axios'

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async (_, thunkApi) => {
    try {
      const res = await axios(`${BASE_URL}/categories`);
      // console.log(res.data) - everything ok
      return res.data;

    } catch (err) {
      console.log(err)
      return thunkApi.rejectWithValue(err)
    }
  }
)

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    list: [],
    isLoading: false
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getCategories.pending, (state) => {
      // Add user to the state array
      state.isLoading = true
    })
    builder.addCase(getCategories.fulfilled, (state, action) => {
      // Add user to the state array
      state.list = action.payload
      state.isLoading = false

    })
    builder.addCase(getCategories.rejected, (state) => {
      // Add user to the state array
      state.isLoading = false;
      console.log("Error")
    })
  },
})

export default categoriesSlice.reducer