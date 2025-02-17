import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constans";
import axios from 'axios'

export const createUser = createAsyncThunk(
  'users/createUser',
  async (payload, thunkApi) => {
    try {
      const res = await axios.post(`${BASE_URL}/users`, payload);
      console.log(res.data)
      return res.data;
    } catch (err) {
      console.log(err)
      return thunkApi.rejectWithValue(err)
    }
  }
)
export const loginUser = createAsyncThunk(
  'users/loginUser',
  async (payload, thunkApi) => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, payload);
      console.log(payload, res.data)
      const login = await axios(`${BASE_URL}/auth/profile`, {
        headers: {
          "Authorization": `Bearer ${res.data.access_token}`
        }
      });
      console.log(login.data)
      return login.data;
    } catch (err) {
      console.log(err)
      return thunkApi.rejectWithValue(err)
    }
  }
)

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async (payload, thunkApi) => {
    try {
      const res = await axios.put(`${BASE_URL}/users/${payload.id}`, payload);
      console.log(res.data)
      return res.data;
    } catch (err) {
      console.log(err)
      return thunkApi.rejectWithValue(err)
    }
  }
)

const currentUserUpdate = (state, action) => {
  state.currentUser = action.payload
}


const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    cart: [],
    favourites: [],
    isLoading: false,
    formType: 'signup',
    showForm: false
  },
  reducers: {
    addItemToCart: (state, { payload }) => {
      let newCart = [...state.cart]
      const isFound = newCart.find(({ id, currentSize }) => id === payload.id && currentSize === payload.currentSize)

      if (isFound) {
        newCart = newCart.map((item) => {
          return item.id === payload.id && item.currentSize === payload.currentSize
            ? { ...item, quantity: payload.quantity || item.quantity + 1 }
            : item
        })

      } else {
        newCart = [...newCart, { ...payload, quantity: 1 }]
      }

      state.cart = newCart;
      console.log(state.cart)
    },
    addItemToFavourites: (state, { payload }) => {
      let newFavourites = [...state.favourites]
      const isFound = newFavourites.find(({ id, currentSize }) => id === payload.id && currentSize === payload.currentSize)

      if (isFound) {
        newFavourites = newFavourites.map((item) => {
          return item.id === payload.id && item.currentSize === payload.currentSize
            ? { ...item, quantity: payload.quantity || item.quantity + 1 }
            : item
        })

      } else {
        newFavourites = [...newFavourites, { ...payload, quantity: 1 }]
      }

      state.favourites = newFavourites;
      console.log(state.favourites)
    },
    removeItemFromCart: (state, { payload }) => {
      // const newCart = [...state.cart]
      console.log(payload)
      state.cart = [...state.cart].filter(({ id }) => id !== payload)
    },
    toggleForm: (state, { payload }) => {
      state.showForm = payload
    },
    toggleType: (state, { payload }) => {
      state.formType = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      currentUserUpdate(state, action)
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      currentUserUpdate(state, action)
    })
    builder.addCase(updateUser.fulfilled, (state, action) => {
      currentUserUpdate(state, action)
    })

  },
})
export const { addItemToCart, addItemToFavourites, removeItemFromCart, toggleForm, toggleType } = userSlice.actions;
export default userSlice.reducer