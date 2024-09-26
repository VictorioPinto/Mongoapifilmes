export interface IProduct extends Document {
  code: string;
  name: string;
  director: string;
  sinopse: string;
  lancamento: Date;
  rating: number[];
  tags: string[];
  image: string;
}
