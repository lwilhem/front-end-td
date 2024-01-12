import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://iim.etherial.fr' }),
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    getProductByid: builder.query({
      query: id => `/products/${id}`,
    }),
    getCommentsByProduct: builder.query({
      query: id => `/products/${id}/comments`,
    }),
    postCommentByProduct: builder.mutation({
      mutation: ({ id, body }) => ({
        url: `/products/${id}/comments`,
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const {
  useGetProductsQuery,
  useGetProductByidQuery,
  useGetCommentsByProductQuery,
  usePostCommentByProductMutation,
} = api
