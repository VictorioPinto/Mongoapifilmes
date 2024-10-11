import { Document } from "mongoose";

export interface IProduct extends Document {
  title: string;
  sinopse: string;
  lancamento: Date;
  rating: number;
  tags: string[];
  image: string;
  uuid: string;
}
