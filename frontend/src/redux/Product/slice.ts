import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  product_id: "",
  title: "",
  date: "",
  img: "",
  sinopse: "",
  tags: [],
  rating: "",
};
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
        img: payload.img,
        sinopse: payload.sinopse,
        tags: payload.tags,
        rating: payload.rating,
      };
    },

    logout: (state) => {
      return initialState;
    },
  },
});
export const { setProduct } = productSlice.actions;
export const userSelector = (state: RootState) => state.user;
