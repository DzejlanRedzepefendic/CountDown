import { createSlice } from "@reduxjs/toolkit";
import {userInitialState,stateName} from './userInitialState'

export const userSlice = createSlice({
  name: stateName,
  initialState: userInitialState,
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
