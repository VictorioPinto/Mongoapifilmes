import mongoose, { Schema } from "mongoose";

import { v4 as uuidv4 } from "uuid";

import { IUser } from "../Interfaces/IUser";

const userScheme = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  senha: {
    type: String,
    required: true,
  },
  filmes: {
    type: [],
    required: false,
  },
  products: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: false },
  ],
});

export const User = mongoose.model("User", userScheme);
