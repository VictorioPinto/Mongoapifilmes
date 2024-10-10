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
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, { payload }) => {
      return {
        ...state,
        product_id: payload.product_id,
        title: payload.titulo,
        date: payload.date,
        img: payload.img
        sinopse: payload.sinopse,
        tags: payload.tags,
        rating: payload.rating
      };
    },

    logout: (state) => {
      return initialState;
    },
  },
});

export const { setUser, logout , setProduct} = userSlice.actions;


export const userSelector = (state: RootState) => state.user;
