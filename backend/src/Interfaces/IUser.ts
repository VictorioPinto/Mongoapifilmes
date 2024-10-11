import { Types } from "mongoose";
import { IFilmes } from "./IFilmes";
import { IProduct } from "./IProduct";
export interface IUser {
  name: String;
  email: String;
  senha: String;
  filmes: IFilmes[];
  products: Types.ObjectId[];
}
