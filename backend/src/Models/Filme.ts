import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { IFilmes } from "../Interfaces/IFilmes";

const filmeScheme = new mongoose.Schema<IFilmes>({
  identifier: {
    type: Number,
    unique: true,
  },
});
export const Filme = mongoose.model<IFilmes>("Filme", filmeScheme);
