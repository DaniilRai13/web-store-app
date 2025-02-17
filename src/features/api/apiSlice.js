import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../utils/constans'
import { buildUrl } from '../../utils/common'


export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: ({ id }) => {
        console.log(id)
        return `/products/${id}`
      },
      providesTags: ['Product']
    }),
    getProducts: builder.query({
      query: (params) => {
        // console.log(id)
        return buildUrl('/products', params)
      },
      providesTags: ['Products']
    })
  })
})

export const { useGetProductQuery, useGetProductsQuery } = apiSlice;