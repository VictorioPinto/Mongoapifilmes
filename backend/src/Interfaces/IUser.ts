import { IFilmes } from "./IFilmes";
export interface IUser {
  name: String;
  email: String;
  senha: String;
  filmes: IFilmes[];
}
