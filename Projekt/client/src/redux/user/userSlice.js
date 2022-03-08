import { createSlice } from "@reduxjs/toolkit";
import { userInitialState, stateName } from './userInitialState'

export const userSlice = createSlice({
  name: stateName,
  initialState: userInitialState,
  reducers: {
    auth: (state, action) => {
      state.isLogged = true;
      state.userName = action.payload.name;
      state.id = action.payload.id;
    },
    logout: (state) => {
      state.isLogged = false;
      state.userName = "";
      state.id = "";
    }
  },
});

export const { auth, logout } = userSlice.actions;

export default userSlice.reducer;
