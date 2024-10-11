import { BadRequestError } from "../Errors/BadRequest.error";
import { IProduct } from "../Interfaces/IProduct";
import { IUser } from "../Interfaces/IUser";
import { User } from "../Models/User";
import mongoose from "mongoose";
export class UserRepository {
  addProductToUser = async (
    userId: string,
    productId: string
  ): Promise<IUser> => {
    const user = await User.findById(userId);
    if (!user) throw new BadRequestError("Usuário não encontrado!");

    // Verifica se o productId é um ObjectId válido
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      throw new BadRequestError("ID do produto inválido!");
    }

    // Adiciona o ID do produto ao array de products
    user.products.push(new mongoose.Types.ObjectId(productId));
    return await user.save();
  };

  // Remover um produto do usuário
  removeProductFromUser = async (
    userId: string,
    productId: string
  ): Promise<IUser> => {
    const user = await User.findById(userId);
    if (!user) throw new BadRequestError("Usuário não encontrado!");

    user.products = user.products.filter((id) => id.toString() !== productId);
    return await user.save();
  };

  // Obter produtos do usuário
  getUserProducts = async (userId: string): Promise<IProduct[]> => {
    const user = await User.findById(userId).populate<{ products: IProduct[] }>(
      "products"
    ); // Popula os produtos com o tipo correto

    if (!user) throw new BadRequestError("Usuário não encontrado!");

    return user.products; // Agora o TypeScript sabe que são IProduct[]
  };

  getUsers = async () => {
    const users = await User.find();

    return users;
  };

  getUserById = async (id: string) => {
    const user = await User.findOne({ _id: id });

    if (!user) throw new BadRequestError("Usuário não encontrado!");

    return user;
  };

  insertUser = async (user: IUser) => {
    const alreadyIn = await User.findOne({ email: user.email });

    if (alreadyIn !== null) throw new BadRequestError("Email já cadastrado!");

    const insertedUser = new User(user);

    insertedUser.save();

    return insertedUser;
  };

  loginUser = async (email: string, senha: string) => {
    const user = await User.findOne({ email: email, senha: senha });

    if (!user) throw new BadRequestError("Credenciais erradas!");

    return user;
  };
}
