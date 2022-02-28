import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogged: false,
    userName: "",
    id: "",
  },
  reducers: {
    auth: (state) => {
      state.isLogged = !state.isLogged;
    },
    setUserAndId: (state, action) => {
      state.userName = action.payload.name;
      state.id = action.payload.id
    }
  },
});

export const { auth, setUserAndId } = userSlice.actions;

export default userSlice.reducer;
