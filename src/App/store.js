import { configureStore } from "@reduxjs/toolkit";
import { easyrentalapi } from "./posts/easyrentalapi";
import { autUrl } from "./Consants/api_url";
import { userApi } from "./auth/userApi";
import userReducer from "./auth/usersSlice";

// Or from '@reduxjs/toolkit/query/react'

export const store = configureStore({
  reducer: {
    user: userReducer,
    // Add the generated reducer as a specific top-level slice
    [easyrentalapi.reducerPath]: easyrentalapi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(easyrentalapi.middleware, userApi.middleware),
});
