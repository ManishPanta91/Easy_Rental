import { createSlice } from "@reduxjs/toolkit";
import {
  getUserFromLocal,
  removeUserFromLocal,
  setUser,
} from "../../Component/hooks/localstorage";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: getUserFromLocal(),
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      setUser(action.payload);
    },
    removeUser: (state) => {
      state.user = null;
      removeUserFromLocal();
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
