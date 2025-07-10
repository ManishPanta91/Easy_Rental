// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../Consants/api_url";

// Define a service using a base URL and expected endpoints
export const easyrentalapi = createApi({
  reducerPath: "easyrentalapi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    getallVechcles: builder.query({
      query: () => "/allvehicles",
    }),
       getsallVechclesid: builder.query({
      query: (id) => `/singlevehicle/${id}`,
    }),
   

   
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetallVechclesQuery,useGetsallVechclesidQuery } = easyrentalapi;

// HTTP METHODS
// GET    query
// POST  --MUTATION
// delete--MUTATION
// PUT  --MUTATION
