// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { autUrl } from "../Consants/api_url";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${autUrl}` }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (q) => ({
        url: "/signup",
        body: q,
        method: "POST",
      }),
    }),

    signUser: builder.mutation({
      query: (q) => ({
        url: "/signup",
        body: q,
        method: "POST",
      }),
    }),

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useLoginUserMutation,useSignUserMutation } = userApi;


// HTTP METHODS
// GET    query
// POST  --MUTATION
// delete--MUTATION
// PUT  --MUTATION
