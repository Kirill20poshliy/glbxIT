import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Users } from '../types/types'
// import 'dotenv/config'


export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_HOST }),
  tagTypes: ['Users'],
  endpoints: builder => ({
    getUsers: builder.query<Users, string>({
      query: (val) => `/?term=${val}`,
      providesTags: ['Users'],
    })
  })
})

export const { useGetUsersQuery, useLazyGetUsersQuery } = apiSlice