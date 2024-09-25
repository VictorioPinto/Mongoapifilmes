import mongoose from "mongoose";

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
  },
  senha: {
    type: String,
    required: true,
  },
  filmes: {
    type: [],
    required: false,
  },
});

export const User = mongoose.model("User", userScheme);
