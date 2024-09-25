import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  user_id: "",
  user: "",
  email: "",
  senha: "",
  filmes: [],
  logged: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      return {
        ...state,
        user_id: payload.user_id,
        user: payload.user,
        email: payload.email,
        senha: payload.senha,
        filmes: payload.filmes,
        logged: true,
      };
    },

    logout: (state) => {
      return initialState;
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export const userSelector = (state: RootState) => state.user;
