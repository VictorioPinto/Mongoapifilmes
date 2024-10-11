import mongoose from "mongoose";

import { v4 as uuidv4 } from "uuid";
import { IProduct } from "../Interfaces/IProduct";

const productScheme = new mongoose.Schema<IProduct>({
  title: {
    type: String,
    required: true,
  },
  sinopse: {
    type: String,
    required: true,
  },
  lancamento: {
    type: Date,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export const Product = mongoose.model<IProduct>("Product", productScheme);
